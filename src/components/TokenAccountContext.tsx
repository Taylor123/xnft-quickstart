import { BN } from "@project-serum/anchor";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useConnection, usePublicKey } from "react-xnft";
import { fetchTokens } from "../utils/solana";

type LocalTokenAccount = {
  amount: BN;
  key: string;
};

const emptyMap = new Map();
const TokenAccountContext =
  createContext<Map<string, LocalTokenAccount>>(emptyMap);
const WRAPPED_SOL_ADDRESS = "So11111111111111111111111111111111111111112";

export const TokenAccountContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const publicKey = usePublicKey();
  const connection = useConnection();
  const [tokenAccounts, setTokenAccounts] =
    useState<Map<string, LocalTokenAccount>>(emptyMap);
  useEffect(() => {
    (async () => {
      const [tokenResp, accountInfo] = await Promise.all([
        fetchTokens(publicKey),
        connection.getAccountInfo(publicKey),
      ]);
      tokenResp.set(WRAPPED_SOL_ADDRESS, {
        amount: new BN(accountInfo?.lamports ?? 0),
      });

      setTokenAccounts(tokenResp);
    })();
  }, []);

  return (
    <TokenAccountContext.Provider value={tokenAccounts}>
      {children}
    </TokenAccountContext.Provider>
  );
};

export const useTokenAccountMap = () => useContext(TokenAccountContext);

export const useTokenAccount = (mint: string) => {
  const tokenAccounts = useContext(TokenAccountContext);
  return tokenAccounts.get(mint);
};
