import { pdas } from "@mithraic-labs/psyfi-sdk";
import { BN } from "@project-serum/anchor";
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import { useCallback } from "react";
import { usePublicKey } from "react-xnft";
import { useTokenAccount } from "../components/TokenAccountContext";
import { useToken } from "../components/TokenContext";
import { useVault } from "../components/VaultContext";
import { usePsyFiProgram } from "./usePsyFiProgam";

export const useDeposit = (vaultId: string) => {
  const program = usePsyFiProgram();
  const publicKey = usePublicKey();
  const vault = useVault(vaultId);
  const userCollateralAssetAccount = useTokenAccount(
    vault.accounts.collateralAssetMint
  );
  const token = useToken(vault.accounts.collateralAssetMint);
  console.log("taylor ", vault.accounts.vaultOwnershipTokenMint, PublicKey.default);

  return useCallback(
    async (size: BigNumber) => {
      if (!userCollateralAssetAccount) {
        // TODO error handling?
        return;
      }
      try {

        const _size = new BN(size.multipliedBy(10 ** token.decimals).toFixed(0));
        const ownershipMintKey = new PublicKey(
          vault.accounts.vaultOwnershipTokenMint
        );
        const vaultAccount = new PublicKey(vault.accounts.vaultAddress);
        const [userVaultOwnershipTokenAccount, [vaultCollateralAssetAccount]] =
          await Promise.all([
            getAssociatedTokenAddress(ownershipMintKey, publicKey),
            pdas.deriveVaultCollateralAccount(program.programId, vaultAccount),
          ]);
        // TODO check if the user has the account already
        const ix = createAssociatedTokenAccountInstruction(
          publicKey,
          userVaultOwnershipTokenAccount,
          publicKey,
          ownershipMintKey
        );
        const userCollateralAssetAccountKey = new PublicKey(
          userCollateralAssetAccount?.key
        );
        const tx = await program.methods
          .deposit(_size)
          .accounts({
            userAuthority: publicKey,
            vaultAccount,
            userCollateralAssetAccount: userCollateralAssetAccountKey,
            userVaultOwnershipTokenAccount,
            vaultCollateralAssetAccount,
            vaultOwnershipTokenMint: ownershipMintKey,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .preInstructions([ix])
          .transaction();
        const signature = await window.xnft.send(tx);
        console.log("tx sig ", signature);
      } catch (err) {
        console.error(err);
      }
    },
    [program, publicKey, userCollateralAssetAccount, vault]
  );
};
