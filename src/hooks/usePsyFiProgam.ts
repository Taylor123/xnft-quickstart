import { Program } from "@project-serum/anchor";
import { useMemo } from "react";
import { useConnection, usePublicKey } from "react-xnft";
import { PsyFiIdl } from "../utils/psyFiIdl";
import { useNetworkType } from "./useNetworkType";

export const usePsyFiProgram = () => {
  const networkType = useNetworkType();
  const connection = useConnection();
  const publicKey = usePublicKey();

  return useMemo(() => {
    const address =
      networkType === "devnet"
        ? "95q3X9ADJv5hWt93oSaPqABPnP1rqfmjgrnto9v83LPK"
        : "PSYFiYqguvMXwpDooGdYV6mju92YEbFobbvW617VNcq";
    // @ts-ignore window.xnft is a provider
    return new Program(PsyFiIdl, address, window.xnft);
  }, [networkType, connection, publicKey]);
};
