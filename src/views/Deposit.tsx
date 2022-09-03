import React, { useState } from "react";
import { View } from "react-xnft";
import { NumberInput } from "../components/NumberInput";
import { PsyButton } from "../components/PsyButton";
import { useToken, useTokens } from "../components/TokenContext";
import { Typography } from "../components/Typography";
import { useVault } from "../components/VaultContext";
import { VaultHeader } from "../components/VaultHeader";

export const Deposit: React.FC<{ id: string }> = ({ id }) => {
  const vault = useVault(id);
  const collateralToken = useToken(vault.accounts.collateralAssetMint);

  const [size, setSize] = useState("");
  const [apyCurrent, setCurrentApy] = useState(
    vault?.apy.standardApy.apyBeforeFees ?? 0
  );
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
      <NumberInput onChange={setSize} placeholder="Amount" value={size} />
      <View style={{ marginBottom: 24, marginTop: 22 }}>
        <PsyButton onClick={() => {}} style={{ width: "100%" }}>
          Deposit
        </PsyButton>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Typography color="title" variant="text1">
          Projected APY
        </Typography>
        <Typography color="title" variant="text8">
          {vault.apy.standardApy.apyBeforeFees.toFixed(2)}%
        </Typography>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Typography color="title" variant="text1">
          Estimate Returns
        </Typography>
        <Typography color="title" variant="text8">
          {`${(parseFloat(size || '0') * (1 + apyCurrent / 100)).toFixed(2)} ${
            collateralToken.tokenSymbol
          }`}
        </Typography>
      </View>
    </View>
  );
};
