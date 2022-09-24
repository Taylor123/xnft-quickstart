import { pdas } from "@mithraic-labs/psyfi-sdk";
import { BN } from "@project-serum/anchor";
import { useCallback } from "react";
import { usePublicKey } from "react-xnft";
import BigNumber from "bignumber.js";
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { useConnection } from "react-xnft/dist/esm";
import { useTokenAccount, useUpdateTokenAccounts } from "../components/TokenAccountContext";
import { useToken } from "../components/TokenContext";
import { useVault } from "../components/VaultContext";
import { usePsyFiProgram } from "./usePsyFiProgam";

export const useWithdraw = (vaultId: string) => {
  const connection = useConnection();
  const program = usePsyFiProgram();
  const publicKey = usePublicKey();
  const vault = useVault(vaultId);
  const userCollateralAssetAccount = useTokenAccount(
    vault.accounts.collateralAssetMint
  );
  const userVaultOwnershipAccount = useTokenAccount(
    vault.accounts.vaultOwnershipTokenMint
  )
  const token = useToken(vault.accounts.collateralAssetMint);
  const updateTokenAccounts = useUpdateTokenAccounts();

  return useCallback(
    async (size: BigNumber) => {
      if (!userVaultOwnershipAccount) {
        // TODO handle error
        return;
      }
      try {
        const _size = new BN(
          size.multipliedBy(10 ** token.decimals).toFixed(0)
        );
        const feeTokenAccount = new PublicKey(vault.accounts.feeTokenAccount);
        const ownershipMintKey = new PublicKey(
          vault.accounts.vaultOwnershipTokenMint
        );
        const collateralMintKey = new PublicKey(
          vault.accounts.collateralAssetMint
        );
        const vaultAccount = new PublicKey(vault.accounts.vaultAddress);
        const [userCollateralTokenKey, [vaultCollateralAssetAccount]] =
          await Promise.all([
            getAssociatedTokenAddress(collateralMintKey, publicKey),
            pdas.deriveVaultCollateralAccount(program.programId, vaultAccount),
          ]);
        const userCollateralAccountInfo = connection.getAccountInfo(
          userCollateralTokenKey,
          "confirmed"
        );
        const preInstructions: TransactionInstruction[] = [];
        if (!userCollateralAccountInfo) {
          const ix = createAssociatedTokenAccountInstruction(
            publicKey,
            userCollateralTokenKey,
            publicKey,
            ownershipMintKey
          );
          preInstructions.push(ix);
        }
        const userVaultOwnershipTokenAccountKey = new PublicKey(
          userVaultOwnershipAccount?.key
        );
        const tx = await program.methods
          .withdraw(_size)
          .accounts({
            userAuthority: publicKey,
            vaultAccount,
            userCollateralAssetAccount: userCollateralTokenKey,
            userVaultOwnershipTokenAccount: userVaultOwnershipTokenAccountKey,
            vaultCollateralAssetAccount,
            feeTokenAccount,
            vaultOwnershipTokenMint: ownershipMintKey,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .preInstructions(preInstructions)
          .transaction();
        const signature = await window.xnft.send(tx);
        console.log("tx sig ", signature);
        setTimeout(() => {
          // TODO improve the updating of token balances
          updateTokenAccounts();
        }, 1000);
      } catch (err) {
        console.error(err);
      }
    },
    [program, publicKey, userCollateralAssetAccount, updateTokenAccounts, vault]
  );
};