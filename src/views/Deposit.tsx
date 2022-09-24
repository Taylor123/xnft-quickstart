import BigNumber from "bignumber.js";
import React, { useState } from "react";
import { View } from "react-xnft";
import { NumberInput } from "../components/NumberInput";
import { PsyButton } from "../components/PsyButton";
import { useToken } from "../components/TokenContext";
import { Typography } from "../components/Typography";
import { useVault } from "../components/VaultContext";
import { VaultHeader } from "../components/VaultHeader";
import { useDeposit } from "../hooks/useDeposit";
import { useNormalizedTokenAmount } from "../hooks/useNormalizedTokenAmount";

export const Deposit: React.FC<{ id: string }> = ({ id }) => {
  const [size, setSize] = useState("");
  const vault = useVault(id);
  const collateralToken = useToken(vault.accounts.collateralAssetMint);
  const collateralTokenAmount = useNormalizedTokenAmount(
    vault.accounts.collateralAssetMint
  );


  const deposit = useDeposit(id);
  const onDeposit = async () => {
    const _size = new BigNumber(size);
    if (!size || _size.eq(0)) {
      // TODO error handling
      return;
    }
    await deposit(_size);
  };
  const [apyCurrent, setCurrentApy] = useState(
    vault?.apy.standardApy.apyBeforeFees ?? 0
  );


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
          In wallet: {collateralTokenAmount.toString()}{" "}
          {collateralToken.tokenSymbol}
        </Typography>
        {/* <Typography>TODO make TextButton for max</Typography> */}
      </View>
      <NumberInput onChange={setSize} placeholder="Amount" value={size} />
      <View style={{ marginBottom: 24, marginTop: 22 }}>
        <PsyButton onClick={() => onDeposit()} style={{ width: "100%" }}>
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
          {`${(parseFloat(size || "0") * (1 + apyCurrent / 100)).toFixed(2)} ${
            collateralToken.tokenSymbol
          }`}
        </Typography>
      </View>
    </View>
  );
};
