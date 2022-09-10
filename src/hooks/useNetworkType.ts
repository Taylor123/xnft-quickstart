import { useConnection } from "react-xnft";

export const useNetworkType = (): "devnet" | "mainnet" => {
  const connection = useConnection();

  // @ts-ignore
  if (connection._rpcEndpoint.includes("devnet")) {
    return "devnet";
  }
  return "mainnet";
};
