import React from "react";
import { useNavigation, View } from "react-xnft";
import { ProgressBar } from "../components/ProgressBar";
import { PsyButton } from "../components/PsyButton";
import { useTokens } from "../components/TokenContext";
import { Typography } from "../components/Typography";
import { useVault } from "../components/VaultContext";
import { VaultHeader } from "../components/VaultHeader";
import { useVaultAmountInCollateralAsset } from "../hooks/useVaultAmountInCollateralAsset";

export const Vault: React.FC<{ id: string }> = ({ id }) => {
  const vault = useVault(id);
  const tokens = useTokens();
  const navigation = useNavigation();
  const collateralToken = tokens[vault.accounts.collateralAssetMint];
  const depositRatio = vault.deposits.current / vault.deposits.max;
  const depositPercent = depositRatio * 100;
  const position = useVaultAmountInCollateralAsset(id);

  return (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
      <VaultHeader id={id} />
      <Typography color="title" variant="text2" style={{ marginTop: 20 }}>
        Vault Capacity
      </Typography>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
          marginTop: 12,
        }}
      >
        <Typography color="primary" variant="text7">
          Deposited
        </Typography>
        <Typography color="primary" variant="text7">
          {vault.deposits.current} {collateralToken.tokenSymbol}
        </Typography>
      </View>
      <ProgressBar height={6} percent={depositPercent} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <Typography color="primary" variant="text7">
          MAX Vault
        </Typography>
        <Typography color="primary" variant="text7">
          {vault.deposits.max} {collateralToken.tokenSymbol}
        </Typography>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Typography color="title" variant="text2">
          Vault Fee
        </Typography>
        <View>
          {!!vault.fees.performance && (
            <Typography color="title" variant="text7">
              {vault.fees.performance}% Performance
            </Typography>
          )}
          {!!(vault.fees.performance && vault.fees.withdrawal) && (
            <View style={{ marginTop: 4 }} />
          )}
          {!!vault.fees.withdrawal && (
            <Typography color="title" variant="text7">
              {vault.fees.withdrawal}% Withdrawal
            </Typography>
          )}
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Typography color="title" variant="text2">
          Your Position
        </Typography>
        <Typography color="title" variant="text7">
          {position.toString()} {collateralToken.tokenSymbol}
        </Typography>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 32,
        }}
      >
        <PsyButton onClick={() => navigation.push("deposit", { id })}>
          Deposit
        </PsyButton>
        {!!position.gt(0) && (
          <>
            <View style={{ marginLeft: 8 }} />
            <PsyButton onClick={() => navigation.push("withdraw", { id })}>
              Withdraw
            </PsyButton>
          </>
        )}
      </View>
    </View>
  );
};
