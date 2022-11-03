import React, { useMemo, useState } from "react";
import { Text, useNavigation, View } from "react-xnft";
import { Checkbox } from "../components/Checkbox";
import { Header } from "../components/Header";
import { useTokenAccountMap } from "../components/TokenAccountContext";
import { Typography } from "../components/Typography";
import { useVaultPortfolioValue, useVaults } from "../components/VaultContext";
import { VaultItem } from "../components/VaultItem";

export const Home = () => {
  const navigation = useNavigation();
  const vaults = useVaults();
  const vaultList = useMemo(() => Object.keys(vaults), [vaults]);
  const portfolioValue = useVaultPortfolioValue();
  const tokenAccountsMap = useTokenAccountMap();
  const [positionsOnly, setPositionsOnly] = useState(false);
  const filteredVaultList = useMemo(() => {
    return vaultList.filter((vaultId) => {
      const vault = vaults[vaultId];

      if (vault.vaultType !== 0) {
        return false;
      }

      if (!positionsOnly) {
        return true;
      }
      const vaultTokenAccount = tokenAccountsMap.get(
        vault.accounts.vaultOwnershipTokenMint
      );
      const vaultTokenAmount = vaultTokenAccount?.amount?.toNumber() || 0;
      return !!vaultTokenAmount;
    });
  }, [positionsOnly, vaultList]);

  return (
    <View>
      <Header>
        <Text>PsyFi</Text>
      </Header>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 12 }}>
        <Typography color="primary" variant="text4">
          My position value
        </Typography>
        <Typography color="title" variant="text5">
          ${portfolioValue.toFixed(2)}
        </Typography>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 44,
          }}
        >
          <Typography color="title" variant="text2">
            Vault
          </Typography>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Checkbox
              checked={positionsOnly}
              onClick={() => setPositionsOnly((x) => !x)}
            />
            <View style={{ width: 8 }} />
            <Typography color="primary" variant="text7">
              Only my positions
            </Typography>
          </View>
        </View>
        <View style={{ paddingTop: 8 }}>
          {filteredVaultList.map((id) => (
            <View key={id} style={{ marginBottom: 8 }}>
              <VaultItem id={id} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
