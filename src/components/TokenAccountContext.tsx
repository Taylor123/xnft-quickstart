import React, { createContext, useEffect, useState } from "react";
import { Token } from "../types";
import { fetchTokens } from "../utils/solana";

const TokenAccountContext = createContext<Record<string, Token>>({});

export const TokenAccountContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [tokenAccounts, setTokenAccounts] = useState({});
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
