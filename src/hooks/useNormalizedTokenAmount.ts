import BigNumber from "bignumber.js";
import { useMemo } from "react";
import { useTokenAccount } from "../components/TokenAccountContext";
import { useToken } from "../components/TokenContext";

export const useNormalizedTokenAmount = (mint: string): BigNumber => {
  const tokenAccount = useTokenAccount(mint);
  const tokenInfo = useToken(mint);

  return useMemo(() => {
    const amount = new BigNumber(tokenAccount?.amount.toString() ?? 0);
    const normalizedAmount = amount.div(
      new BigNumber(10).pow(new BigNumber(tokenInfo.decimals ?? 0))
    );

    return normalizedAmount;
  }, [tokenAccount]);
};
