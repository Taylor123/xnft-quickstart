import React, { useMemo } from "react";
import { Image, Text, View } from "react-xnft";
import { useVault } from "./VaultContext";
import { Typography } from "./Typography";

export const VaultItem: React.FC<{ id: string }> = ({ id }) => {
  const vault = useVault(id);

  const [asset, vaultType] = useMemo(() => {
    const [asset, ...rest] = vault.name.split(" ");
    const type = rest.join(" ");

    return [asset, type.toLowerCase()];
  }, []);

  return (
    <View
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 14,
        paddingTop: 14,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          src="https://uploads-ssl.webflow.com/6158e3591ba06d14de4fd0df/61f900784e63439a5a052fed_PsyOptions.svg"
          style={{ height: 40, width: 40 }}
        />
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
        <Typography color="title" variant="text2">{vault.apy.currentEpochApy.toFixed(2)}% APY</Typography>
      </View>
    </View>
  );
};
