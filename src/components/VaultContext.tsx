import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Vault } from "../types";
import { fetchAllVaults } from "../utils/fetchAllVaults";

const VaultContext = createContext<Record<string, Vault>>({});

export const VaultContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [vaults, setVaults] = useState({});
  useEffect(() => {
    // fetch vaults
    (async () => {
      const resp = await fetchAllVaults();
      setVaults(resp?.vaults ?? {});
    })();
  }, []);

  return (
    <VaultContext.Provider value={vaults}>{children}</VaultContext.Provider>
  );
};

export const useVaults = () => useContext(VaultContext);

export const useVault = (id: string) => {
  const vaults = useVaults();

  return useMemo(() => vaults[id], [id, vaults]);
};
