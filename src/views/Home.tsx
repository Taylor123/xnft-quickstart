import React, { useMemo } from "react";
import { Button, Text, useNavigation, View } from "react-xnft";
import { Header } from "../components/Header";
import { useVaults } from "../components/VaultContext";
import { VaultItem } from "../components/VaultItem";

export const Home = () => {
  const navigation = useNavigation();
  const vaults = useVaults();
  const vaultList = useMemo(() => Object.keys(vaults), [vaults]);

  return (
    <View>
      <Header>
        <Text>PsyFi</Text>
      </Header>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 12 }}>
        <Text>My position value</Text>
        <Text>$0.0</Text>
        <Text>Reward</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 42,
          }}
        >
          <Text>0.0 SRM</Text>
          <Button onClick={() => navigation.push("vault")}>
            <Text>Claim</Text>
          </Button>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 44,
          }}
        >
          <Text>Vault</Text>
          <Text>Only my positions</Text>
        </View>
        <View style={{ paddingTop: 8 }}>
          {vaultList.map((id) => (
            <View style={{ marginBottom: 8 }}>
              <VaultItem id={id} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
