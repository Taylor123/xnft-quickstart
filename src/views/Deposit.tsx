import React, { useState } from "react";
import { View } from "react-xnft";
import { NumberInput } from "../components/NumberInput";
import { useTokens } from "../components/TokenContext";
import { Typography } from "../components/Typography";
import { useVault } from "../components/VaultContext";
import { VaultHeader } from "../components/VaultHeader";

export const Deposit: React.FC<{ id: string }> = ({ id }) => {
  const vault = useVault(id);
  const tokens = useTokens();
  const collateralToken = tokens[vault.accounts.collateralAssetMint];
  // const [size, setSize] = useState("");
  // TODO wire up
  const availableCollateral = 100;

  return (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
      <VaultHeader id={id} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Typography color="primary" variant="text7">
          In wallet: {availableCollateral} {collateralToken.tokenSymbol}
        </Typography>
        {/* <Typography>
          TODO make TextButton for max
        </Typography> */}
      </View>
      {/* <NumberInput onChange={setSize} placeholder="Amount" value={size} /> */}
    </View>
  );
};
