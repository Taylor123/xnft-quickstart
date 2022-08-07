import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Token } from "../types";
import { getTokens } from "../utils/api";

const TokenContext = createContext<Record<string, Token>>({});

export const TokenContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tokens, setTokens] = useState({});
  useEffect(() => {
    // fetch tokens
    (async () => {
      const resp = await getTokens();
      setTokens(resp ?? {});
    })();
  }, []);

  return (
    <TokenContext.Provider value={tokens}>{children}</TokenContext.Provider>
  );
};

export const useTokens = () => useContext(TokenContext);

export const useToken = (mint: string) => {
  const vaults = useTokens();

  return useMemo(() => vaults[mint], [mint, vaults]);
};
