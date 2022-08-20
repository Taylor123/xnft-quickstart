import React from "react";
import { Image, View } from "react-xnft";
import { useTokens } from "./TokenContext";
import { Typography } from "./Typography";
import { useVault } from "./VaultContext";

export const VaultHeader: React.FC<{ id: string }> = ({ id }) => {
  const vault = useVault(id);
  const tokens = useTokens();
  const token = tokens[vault.accounts.optionsUnderlyingMint];
  const [asset, ...rest] = vault.name.split(" ");
  const vaultType = rest.join(" ").toLowerCase();

  return (
    <View
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Image
        src={token.icon}
        style={{ height: 40, width: 40, marginRight: 12 }}
      />
      <Typography
        color="title"
        variant="text6"
        style={{ textTransform: "capitalize" }}
      >
        {asset} {vaultType}
      </Typography>
    </View>
  );
};
