import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNetworkType } from "../hooks/useNetworkType";
import { Vault } from "../types";
import { getVaults } from "../utils/api";
import { useTokenAccountMap } from "./TokenAccountContext";
import { useTokens } from "./TokenContext";

const VaultContext = createContext<Record<string, Vault>>({});

export const VaultContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const network = useNetworkType();
  const [vaults, setVaults] = useState({});
  useEffect(() => {
    // fetch vaults
    (async () => {
      const resp = await getVaults(network);
      setVaults(resp?.vaults ?? {});
    })();
  }, [network]);

  return (
    <VaultContext.Provider value={vaults}>{children}</VaultContext.Provider>
  );
};

export const useVaults = () => useContext(VaultContext);

export const useVault = (id: string) => {
  const vaults = useVaults();

  return useMemo(() => vaults[id], [id, vaults]);
};

export const useVaultPortfolioValue = () => {
  const vaults = useVaults();
  const tokenAccountsMap = useTokenAccountMap();
  const tokenMap = useTokens()

  return useMemo(
    () =>
      Object.values(vaults).reduce((acc, vault) => {
        const vaultTokenAccount = tokenAccountsMap.get(
          vault.accounts.vaultOwnershipTokenMint
        );
        const vaultTokenAmount = vaultTokenAccount?.amount?.toNumber() || 0;
        const vaultOwnershipToken = tokenMap[vault.accounts.vaultOwnershipTokenMint]
        const vaultTokenUiAmount =
          vaultTokenAmount * 10 ** -vaultOwnershipToken.decimals;
        const unstakedAmountInCollateralAsset =
          vault.valuePerVaultToken * vaultTokenUiAmount;
        const position =
          unstakedAmountInCollateralAsset * vault.collateralTokenPrice.value;

        return acc + position;
      }, 0),
    [tokenAccountsMap, vaults]
  );
};
