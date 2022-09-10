import { TokenResponse, VaultsResponse } from "../types";

const baseUrl = "https://us-central1-psyfi-api.cloudfunctions.net";

const get = async <T>(
  url: string,
  { network }: { network?: "devnet" | "mainnet" } = {}
): Promise<T | undefined> => {
  try {
    const resp = await fetch(`${url}${network ? `?network=${network}` : ""}`);
    const json = await resp.json();
    return json;
  } catch (err) {
    console.warn(err);
  }
};

export const getTokens = (network?: "devnet" | "mainnet") =>
  get<TokenResponse>(`${baseUrl}/tokens`, { network });
export const getVaults = (network?: "devnet" | "mainnet") =>
  get<VaultsResponse>(`${baseUrl}/vaults`, { network });
