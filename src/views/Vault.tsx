import React from "react";
import { Button, Image, View } from "react-xnft";
import { ProgressBar } from "../components/ProgressBar";
import { PsyButton } from "../components/PsyButton";
import { useTokens } from "../components/TokenContext";
import { Typography } from "../components/Typography";
import { useVault } from "../components/VaultContext";

export const Vault: React.FC<{ id: string }> = ({ id }) => {
  const vault = useVault(id);
  const tokens = useTokens();
  const token = tokens[vault.accounts.optionsUnderlyingMint];
  const collateralToken = tokens[vault.accounts.collateralAssetMint];
  const [asset, ...rest] = vault.name.split(" ");
  const vaultType = rest.join(" ").toLowerCase();
  const depositRatio = vault.deposits.current / vault.deposits.max;
  const depositPercent = depositRatio * 100;
  // TODO wire up position
  const position = 1;

  return (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
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
          TODO
        </Typography>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 32,
        }}
      >
        <PsyButton>Deposit</PsyButton>
        {!!position && (
          <>
            <View style={{ marginLeft: 8 }} />
            <PsyButton>Withdraw</PsyButton>
          </>
        )}
      </View>
    </View>
  );
};
