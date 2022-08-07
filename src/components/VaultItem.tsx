import React, { useMemo } from "react";
import { Button, Image, Text, useNavigation, View } from "react-xnft";
import { useVault } from "./VaultContext";
import { Typography } from "./Typography";
import { ProgressBar } from "./ProgressBar";
import { useToken } from "./TokenContext";

export const VaultItem: React.FC<{ id: string }> = ({ id }) => {
  const vault = useVault(id);
  const token = useToken(vault.accounts.optionsUnderlyingMint);
  const navigation = useNavigation();
  const [asset, vaultType] = useMemo(() => {
    const [asset, ...rest] = vault.name.split(" ");
    const type = rest.join(" ");

    return [asset, type.toLowerCase()];
  }, []);
  const depositRatio = vault.deposits.current / vault.deposits.max;
  const depositPercent = depositRatio * 100;

  return (
    <Button
      onClick={() => navigation.push("vault", { id })}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 14,
        paddingTop: 14,
        height: "auto",
        width: "auto",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image src={token.icon} style={{ height: 40, width: 40 }} />
        <View style={{ marginLeft: 8 }}>
          <Typography color="primary" variant="text1">
            {asset}
          </Typography>
          <Typography
            color="primary"
            style={{ textTransform: "capitalize" }}
            variant="text1"
          >
            {vaultType}
          </Typography>
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <Typography color="title" variant="text2">
          {vault.apy.currentEpochApy.toFixed(2)}% APY
        </Typography>
      </View>
      <View style={{ marginTop: 12 }}>
        <Typography color="primary" style={{ marginBottom: 4 }} variant="text3">
          Deposited ({depositPercent.toFixed(2)}%)
        </Typography>
        <ProgressBar percent={depositPercent} />
      </View>
    </Button>
  );
};
