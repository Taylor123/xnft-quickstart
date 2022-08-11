import { useMemo } from "react";
import { useVault } from "../components/VaultContext";

export const useParsedVaultType = (id: string): [string, string] => {
  const vault = useVault(id);

  // TODO wrap in useMemo when it works
  const [asset, ...rest] = vault.name.split(" ");
  const type = rest.join(" ");

  return [asset, type.toLowerCase()];
};
