import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNetworkType } from "../hooks/useNetworkType";
import { Token } from "../types";
import { getTokens } from "../utils/api";

const TokenContext = createContext<Record<string, Token>>({});

export const TokenContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const network = useNetworkType();
  const [tokens, setTokens] = useState({});
  useEffect(() => {
    // fetch tokens
    (async () => {
      const resp = await getTokens(network);
      setTokens(resp ?? {});
    })();
  }, [network]);

  return (
    <TokenContext.Provider value={tokens}>{children}</TokenContext.Provider>
  );
};

export const useTokens = () => useContext(TokenContext);

// Getting an error when using useMemo. Need to resolve
export const useToken = (mint: string) => {
  const tokens = useTokens();

  return useMemo(() => tokens[mint], [mint, tokens]);
};
