import { BN } from "@project-serum/anchor";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useConnection, usePublicKey } from "react-xnft";
import { fetchTokens } from "../utils/solana";

type LocalTokenAccount = {
  amount: BN;
  key: string;
};

const emptyMap = new Map();
const TokenAccountContext = createContext<
  [Map<string, LocalTokenAccount>, () => void]
>([emptyMap, () => {}]);
const WRAPPED_SOL_ADDRESS = "So11111111111111111111111111111111111111112";

export const TokenAccountContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const publicKey = usePublicKey();
  const connection = useConnection();
  const [tokenAccounts, setTokenAccounts] =
    useState<Map<string, LocalTokenAccount>>(emptyMap);
  const updateTokenAccounts = useCallback(async () => {
    const [tokenResp, accountInfo] = await Promise.all([
      fetchTokens(publicKey, connection),
      connection.getAccountInfo(publicKey),
    ]);
    tokenResp.set(WRAPPED_SOL_ADDRESS, {
      amount: new BN(accountInfo?.lamports ?? 0),
    });

    setTokenAccounts(tokenResp);
  }, [connection, publicKey]);

  useEffect(() => {
    updateTokenAccounts();
  }, [updateTokenAccounts]);

  return (
    <TokenAccountContext.Provider value={[tokenAccounts, updateTokenAccounts]}>
      {children}
    </TokenAccountContext.Provider>
  );
};

export const useTokenAccountMap = () => useContext(TokenAccountContext)[0];
export const useUpdateTokenAccounts = () => useContext(TokenAccountContext)[1];


export const useTokenAccount = (mint: string) => {
  const [tokenAccounts] = useContext(TokenAccountContext);
  return tokenAccounts.get(mint);
};
