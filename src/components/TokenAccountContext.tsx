import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchTokens } from "../utils/solana";

const emptyMap = new Map();
const TokenAccountContext = createContext<Map<string, any>>(emptyMap);

export const TokenAccountContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [tokenAccounts, setTokenAccounts] =
    useState<Map<string, any>>(emptyMap);
  useEffect(() => {
    (async () => {
      const resp = await fetchTokens(window.xnft.publicKey);
      setTokenAccounts(resp);
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
