import { TokenResponse, VaultsResponse } from "../types";

const baseUrl = "https://us-central1-psyfi-api.cloudfunctions.net";

const get = async <T>(
  url: string,
  { network }: { network?: "devnet" } = {}
): Promise<T | undefined> => {
  try {
    const resp = await fetch(`${url}${network ? `?network=${network}` : ""}`);
    const json = await resp.json();
    return json;
  } catch (err) {
    console.warn(err);
  }
};

export const getTokens = () => get<TokenResponse>(`${baseUrl}/tokens`);
export const getVaults = () => get<VaultsResponse>(`${baseUrl}/vaults`);
