import { useVault } from "../components/VaultContext";
import { useNormalizedTokenAmount } from "./useNormalizedTokenAmount";

export const useVaultAmountInCollateralAsset = (vaultId: string) => {
  const vault = useVault(vaultId);
  const vaultTokenAmount = useNormalizedTokenAmount(
    vault.accounts.vaultOwnershipTokenMint
  );

  return vaultTokenAmount.multipliedBy(vault.valuePerVaultToken);
};
