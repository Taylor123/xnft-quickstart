import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { mockVaults } from "../../mockResponses";
import { Vault } from "../types";
import { getVaults } from "../utils/api";

const VaultContext = createContext<Record<string, Vault>>({});

export const VaultContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [vaults, setVaults] = useState(mockVaults.vaults);
  // useEffect(() => {
  //   // fetch vaults
  //   (async () => {
  //     const resp = await getVaults();
  //     setVaults(resp?.vaults ?? {});
  //   })();
  // }, []);

  return (
    <VaultContext.Provider value={vaults}>{children}</VaultContext.Provider>
  );
};

export const useVaults = () => useContext(VaultContext);

export const useVault = (id: string) => {
  const vaults = useVaults();

  return useMemo(() => vaults[id], [id, vaults]);
};
