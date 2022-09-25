import BigNumber from "bignumber.js";
import React, { useState } from "react";
import { View } from "react-xnft";
import { NumberInput } from "../components/NumberInput";
import { PsyButton } from "../components/PsyButton";
import { Typography } from "../components/Typography";
import { useVault } from "../components/VaultContext";
import { VaultHeader } from "../components/VaultHeader";
import { useNormalizedTokenAmount } from "../hooks/useNormalizedTokenAmount";
import { useWithdraw } from "../hooks/usewithdraw";

export const Withdraw: React.FC<{ id: string }> = ({ id }) => {
  const [size, setSize] = useState("");
  const vault = useVault(id);
  const vaultOwnershipTokenAmount = useNormalizedTokenAmount(
    vault.accounts.vaultOwnershipTokenMint
  );


  const withdraw = useWithdraw(id);
  const onWithdraw = async () => {
    const _size = new BigNumber(size);
    if (!size || _size.eq(0)) {
      // TODO error handling
      return;
    }
    await withdraw(_size);
  };


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
          Vault ownership tokens: {vaultOwnershipTokenAmount.toString()}
        </Typography>
      </View>
      <NumberInput onChange={setSize} placeholder="Amount" value={size} />
      <View style={{ marginBottom: 24, marginTop: 22 }}>
        <PsyButton onClick={() => onWithdraw()} style={{ width: "100%" }}>
          Withdraw
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
          Total Fees
        </Typography>
        <View>
          <Typography color="title" variant="text8">
            {vault.fees.performance}% Performance
          </Typography>
          <Typography color="title" variant="text8">
            {vault.fees.withdrawal}% Withdrawal
          </Typography>
        </View>
      </View>
    </View>
  );
};
