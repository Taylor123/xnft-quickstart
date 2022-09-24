import React, { useMemo } from "react";
import { Text, useNavigation, View } from "react-xnft";
import { Header } from "../components/Header";
import { Typography } from "../components/Typography";
import { useVaultPortfolioValue, useVaults } from "../components/VaultContext";
import { VaultItem } from "../components/VaultItem";

export const Home = () => {
  const navigation = useNavigation();
  const vaults = useVaults();
  const vaultList = useMemo(() => Object.keys(vaults), [vaults]);
  const portfolioValue = useVaultPortfolioValue();

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
        <Typography color="primary" variant="text4" style={{ marginTop: 16 }}>
          Reward
        </Typography>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 42,
          }}
        >
          <Typography color="title" variant="text6">
            0.0 SRM
          </Typography>
          {/* TODO make this a button */}
          <Typography color="link" variant="text4">
            {"Claim>"}
          </Typography>
        </View>
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
          <Typography color="primary" variant="text7">
            Only my positions
          </Typography>
        </View>
        <View style={{ paddingTop: 8 }}>
          {vaultList.map((id) => (
            <View key={id} style={{ marginBottom: 8 }}>
              <VaultItem id={id} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
