export type Token = {
  tokenSymbol: string;
  tokenName: string;
  mintAddress: string;
  icon: string;
  decimals: number;
  lowPrecisionDecimals: number;
  coingeckoId: string;
};

export type TokenResponse = Record<string, Token>;
