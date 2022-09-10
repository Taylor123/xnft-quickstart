import { Idl } from "@project-serum/anchor";

export const PsyFiIdl: Idl = {
  version: "0.1.0",
  name: "psyfi_euros",
  instructions: [
    {
      name: "initializeVault",
      accounts: [
        {
          name: "ownerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "managerAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "taskerAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawalCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "collateralAssetMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "quoteAssetMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "auctionCurrencyMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "currentEpochHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "uniqueSeed",
          type: "u16",
        },
        {
          name: "strategyType",
          type: "u8",
        },
        {
          name: "vaultTokenDecimals",
          type: "u8",
        },
        {
          name: "seedVaultTokenPerCollateral",
          type: {
            defined: "ExchangeRate",
          },
        },
        {
          name: "endingExchangeRateDecimals",
          type: "u8",
        },
        {
          name: "maxDeposits",
          type: "u64",
        },
        {
          name: "fees",
          type: {
            defined: "VaultFees",
          },
        },
        {
          name: "oracleProviderId",
          type: "u8",
        },
      ],
    },
    {
      name: "updateVaultParameters",
      accounts: [
        {
          name: "ownerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "auctionCurrencyMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "maxDeposits",
          type: "u64",
        },
        {
          name: "fees",
          type: {
            defined: "VaultFees",
          },
        },
        {
          name: "oracleProviderId",
          type: "u8",
        },
      ],
    },
    {
      name: "updateVaultAuthorities",
      accounts: [
        {
          name: "ownerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "managerAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "taskerAuthority",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateFeeAccount",
      accounts: [
        {
          name: "ownerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeTokenAccount",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "mintOptions",
      accounts: [
        {
          name: "managerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroMeta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collateralPool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "optionMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "writerTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mintedOptionDest",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mintedWriterTokenDest",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroPrimitiveProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "tokensToMint",
          type: "u64",
        },
      ],
    },
    {
      name: "cancelOptionsPosition",
      accounts: [
        {
          name: "managerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroMeta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collateralPool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "optionMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "writerTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "optionTokenSrc",
          isMut: true,
          isSigner: false,
        },
        {
          name: "writerTokenSrc",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroPrimitiveProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "closePostExpiry",
      accounts: [
        {
          name: "vaultAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nextEpochHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawalCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "collateralAssetMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "euroMeta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "expirationData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "writerTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "writerTokenSrc",
          isMut: true,
          isSigner: false,
        },
        {
          name: "collateralPool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "euroPrimitiveProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initializeDepositReceipt",
      accounts: [
        {
          name: "userAuthority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "depositReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "transferToDepositReceipt",
      accounts: [
        {
          name: "userAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "depositReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "transferAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "transferFromDepositReceipt",
      accounts: [
        {
          name: "userAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "depositReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "transferAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "payoutDepositReceipt",
      accounts: [
        {
          name: "feeReceiver",
          isMut: true,
          isSigner: true,
        },
        {
          name: "depositReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "receivingVaultTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initializeWithdrawalReceipt",
      accounts: [
        {
          name: "userAuthority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "withdrawalReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "transferToWithdrawalReceipt",
      accounts: [
        {
          name: "userAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "withdrawalReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "vaultTokenAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "transferFromWithdrawalReceipt",
      accounts: [
        {
          name: "userAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "withdrawalReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "vaultTokenAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "payoutWithdrawalReceipt",
      accounts: [
        {
          name: "feeReceiver",
          isMut: true,
          isSigner: true,
        },
        {
          name: "withdrawalReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "receiptOwnerCollateralAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawalCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: false,
          isSigner: false,
        },
        {
          name: "receiptOwner",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tempSolAccount",
          isMut: true,
          isSigner: true,
        },
        {
          name: "nativeMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "deposit",
      accounts: [
        {
          name: "userAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "collateralAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdraw",
      accounts: [
        {
          name: "userAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "vaultTokenAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "initializeSerumOpenOrders",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vaultAuthority",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: false,
          isSigner: false,
        },
        {
          name: "euroMeta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "optionMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "openOrders",
          isMut: true,
          isSigner: false,
        },
        {
          name: "serumMarket",
          isMut: true,
          isSigner: false,
        },
        {
          name: "psyMarketAuthority",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroPrimitiveProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dexProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "placeSerumOrder",
      accounts: [
        {
          name: "taskerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: false,
          isSigner: false,
        },
        {
          name: "euroMeta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "optionMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "optionTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "requestQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "bids",
          isMut: true,
          isSigner: false,
        },
        {
          name: "asks",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coinVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "priceCurrencyVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "openOrders",
          isMut: true,
          isSigner: false,
        },
        {
          name: "serumMarket",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroPrimitiveProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dexProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "limitPrice",
          type: "u64",
        },
        {
          name: "clientOrderId",
          type: "u64",
        },
      ],
    },
    {
      name: "settleSerumOrder",
      accounts: [
        {
          name: "vaultAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroMeta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "optionMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "optionTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coinVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "priceCurrencyVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "openOrders",
          isMut: true,
          isSigner: false,
        },
        {
          name: "serumMarket",
          isMut: true,
          isSigner: false,
        },
        {
          name: "serumVaultSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "referralAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stagingAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroPrimitiveProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dexProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "cancelSerumOrder",
      accounts: [
        {
          name: "taskerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: false,
          isSigner: false,
        },
        {
          name: "euroMeta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "optionMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "bids",
          isMut: true,
          isSigner: false,
        },
        {
          name: "asks",
          isMut: true,
          isSigner: false,
        },
        {
          name: "openOrders",
          isMut: true,
          isSigner: false,
        },
        {
          name: "serumMarket",
          isMut: true,
          isSigner: false,
        },
        {
          name: "euroPrimitiveProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dexProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "clientOrderId",
          type: "u64",
        },
      ],
    },
    {
      name: "otcSwapBidAsset",
      accounts: [
        {
          name: "taskerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "collateralAssetMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "auctionCurrencyMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stagingAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "taskerPaymentAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "taskerDestinationAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "currentEpochHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "declaredPrice",
          type: "u64",
        },
        {
          name: "stagingAmountToTrade",
          type: "u64",
        },
      ],
    },
    {
      name: "transferToDepositReceiptForStaking",
      accounts: [
        {
          name: "userAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "depositReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultCollateralAssetAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakingRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakePool",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "transferAmount",
          type: "u64",
        },
        {
          name: "lockupPeriod",
          type: "u8",
        },
        {
          name: "forStaking",
          type: "bool",
        },
      ],
    },
    {
      name: "claimRewardForStaker",
      accounts: [
        {
          name: "depositReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakingRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakePool",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rewardPool",
          isMut: false,
          isSigner: false,
        },
        {
          name: "startRewardRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "endRewardRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "allocatedTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "receivingTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakingProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "payoutDepositReceiptToStaking",
      accounts: [
        {
          name: "feeReceiver",
          isMut: true,
          isSigner: true,
        },
        {
          name: "depositReceipt",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultOwnershipTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "epochHistory",
          isMut: false,
          isSigner: false,
        },
        {
          name: "receiptOwnerVaultTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakingRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakePool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakingTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakingProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "VaultAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "ownerAuthority",
            type: "publicKey",
          },
          {
            name: "managerAuthority",
            type: "publicKey",
          },
          {
            name: "taskerAuthority",
            type: "publicKey",
          },
          {
            name: "vaultCollateralAssetAccount",
            type: "publicKey",
          },
          {
            name: "withdrawalCollateralAssetAccount",
            type: "publicKey",
          },
          {
            name: "vaultOwnershipTokenAccount",
            type: "publicKey",
          },
          {
            name: "feeTokenAccount",
            type: "publicKey",
          },
          {
            name: "collateralAssetMint",
            type: "publicKey",
          },
          {
            name: "quoteAssetMint",
            type: "publicKey",
          },
          {
            name: "vaultOwnershipTokenMint",
            type: "publicKey",
          },
          {
            name: "oracle",
            type: "publicKey",
          },
          {
            name: "seedVaultTokenPerCollateral",
            type: {
              defined: "ExchangeRate",
            },
          },
          {
            name: "endingExchangeRateDecimals",
            type: "u8",
          },
          {
            name: "strategyType",
            type: "u8",
          },
          {
            name: "vaultAccountBump",
            type: "u8",
          },
          {
            name: "uniqueSeed",
            type: "u16",
          },
          {
            name: "maxDeposits",
            type: "u64",
          },
          {
            name: "fees",
            type: {
              defined: "VaultFees",
            },
          },
          {
            name: "currentEpoch",
            type: "u64",
          },
          {
            name: "currentEpochHistory",
            type: "publicKey",
          },
          {
            name: "pendingCollateralAssetDeposits",
            type: "u64",
          },
          {
            name: "pendingWithdrawalTokens",
            type: "u64",
          },
          {
            name: "optionsCollateralHeld",
            type: "u64",
          },
          {
            name: "optionsActive",
            type: "bool",
          },
          {
            name: "auctionCurrencyMint",
            type: "publicKey",
          },
          {
            name: "oracleProviderId",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "EpochHistory",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vaultAccount",
            type: "publicKey",
          },
          {
            name: "epoch",
            type: "u64",
          },
          {
            name: "epochHistoryBump",
            type: "u8",
          },
          {
            name: "optionMarketMetaVec",
            type: {
              vec: {
                defined: "OptionMarketMeta",
              },
            },
          },
          {
            name: "optionSaleAmount",
            type: "u64",
          },
          {
            name: "endingCollateralPerVaultToken",
            type: {
              defined: "ExchangeRate",
            },
          },
        ],
      },
    },
    {
      name: "DepositReceipt",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vaultAccount",
            type: "publicKey",
          },
          {
            name: "epochHistory",
            type: "publicKey",
          },
          {
            name: "receiptOwner",
            type: "publicKey",
          },
          {
            name: "depositAmount",
            type: "u64",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "lockupPeriod",
            type: "u8",
          },
          {
            name: "forStaking",
            type: "bool",
          },
          {
            name: "stakingRecord",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "WithdrawalReceipt",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vaultAccount",
            type: "publicKey",
          },
          {
            name: "epochHistory",
            type: "publicKey",
          },
          {
            name: "receiptOwner",
            type: "publicKey",
          },
          {
            name: "withdrawalAmount",
            type: "u64",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "AccountAllowlist",
      type: {
        kind: "struct",
        fields: [
          {
            name: "allowlistType",
            type: "u8",
          },
          {
            name: "enforceAllowlist",
            type: "bool",
          },
          {
            name: "managerAuthority",
            type: "publicKey",
          },
          {
            name: "vaultAccount",
            type: "publicKey",
          },
          {
            name: "accounts",
            type: {
              vec: "publicKey",
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "OptionMarketMeta",
      type: {
        kind: "struct",
        fields: [
          {
            name: "euroMeta",
            type: "publicKey",
          },
          {
            name: "optionSaleMarket",
            type: {
              defined: "OptionTokenSaleMarket",
            },
          },
          {
            name: "writerTokenAccount",
            type: "publicKey",
          },
          {
            name: "optionTokenAccount",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "OptionTokenSaleMarket",
      type: {
        kind: "struct",
        fields: [
          {
            name: "isSaleEnabled",
            type: "bool",
          },
          {
            name: "collateralAssetPerOptionToken",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "ExchangeRate",
      type: {
        kind: "struct",
        fields: [
          {
            name: "rate",
            type: "u128",
          },
          {
            name: "decimals",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VaultFees",
      type: {
        kind: "struct",
        fields: [
          {
            name: "managementFeeBps",
            type: "u64",
          },
          {
            name: "performanceFeeBps",
            type: "u64",
          },
          {
            name: "withdrawalFeeBps",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "OracleProvider",
      type: {
        kind: "enum",
        variants: [
          {
            name: "PYTH",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "ReceiptAlreadyExchanged",
      msg: "This receipt has already been exchanged.",
    },
    {
      code: 6001,
      name: "LowUserBalance",
      msg: "Insufficient balance in user account for the collateral asset.",
    },
    {
      code: 6002,
      name: "LowVaultToken",
      msg: "Insufficient Vault Ownership Token",
    },
    {
      code: 6003,
      name: "MaxVaultCapacity",
      msg: "Maximum Vault Capacity has been reached",
    },
    {
      code: 6004,
      name: "DepositingNotSupported",
      msg: "Depositing when options are active is not supported.",
    },
    {
      code: 6005,
      name: "WithdrawingNotSupported",
      msg: "Withdrawing when options are active is not supported.",
    },
    {
      code: 6006,
      name: "DepositReceiptNotSupported",
      msg: "Please deposit directly into vault when options are not active.",
    },
    {
      code: 6007,
      name: "WithdrawalReceiptNotSupported",
      msg: "Please withdraw directly from vault when options are not active.",
    },
    {
      code: 6008,
      name: "SaleNotEnabled",
      msg: "The sale is currently not enabled. Please contact the administrators if you think that this is wrong.",
    },
    {
      code: 6009,
      name: "InsufficientAmountForSale",
      msg: "There is insufficient amount for sale to meet the order size.",
    },
    {
      code: 6010,
      name: "IncorrectOptionSalePrice",
      msg: "Price to pay per option token does not match the price set.",
    },
    {
      code: 6011,
      name: "MaximumPriceExceeded",
      msg: "Cost of quote asset exceeds max paying price set.",
    },
    {
      code: 6012,
      name: "MaximumSlippageExceeded",
      msg: "Maximum slippage exceeded.",
    },
    {
      code: 6013,
      name: "MaximumFeesExceeded",
      msg: "Maximum configurable fees exceeded.",
    },
    {
      code: 6014,
      name: "InvalidTokenBalance",
      msg: "Final token balance does not match expected.",
    },
    {
      code: 6015,
      name: "AccountIsNotInAllowList",
      msg: "Purchase is not allowed as account is not in the allowlist.",
    },
    {
      code: 6016,
      name: "OptionsHaveNotExpire",
      msg: "Closing market is not allowed yet as options have not expire.",
    },
    {
      code: 6017,
      name: "InsufficientAmountInDepositReceipt",
      msg: "Insufficient amount in Deposit Receipt for instruction.",
    },
    {
      code: 6018,
      name: "InsufficientAmountInWithdrawalReceipt",
      msg: "Insufficient amount in Withdrawal Receipt for instruction.",
    },
    {
      code: 6019,
      name: "OptionsNotActive",
      msg: "Option Market has not yet started.",
    },
    {
      code: 6020,
      name: "WriterAndOptionTokenNotMatch",
      msg: "Writer and Option Tokens amount do not match.",
    },
    {
      code: 6021,
      name: "OptionMarketInvalid",
      msg: "Option Market violates account constraints.",
    },
    {
      code: 6022,
      name: "OptionMarketMetaInvalidLength",
      msg: "Invalid vector length for OptionMarketMeta.",
    },
    {
      code: 6023,
      name: "IndexOutOfRange",
      msg: "Index out of range error.",
    },
    {
      code: 6024,
      name: "InsufficientCollateral",
      msg: "Insufficient collateral for options mint.",
    },
    {
      code: 6025,
      name: "PnlCalculationError",
      msg: "PNL Calculation Error.",
    },
    {
      code: 6026,
      name: "PayoutPendingEpochEnd",
      msg: "Receipt can only be paid out after the epoch has ended.",
    },
    {
      code: 6027,
      name: "EpochHistoryConstraint",
      msg: "EpochHistory constraint error.",
    },
    {
      code: 6028,
      name: "UserCollateralConstraint",
      msg: "User collateral asset account constraint error.",
    },
    {
      code: 6029,
      name: "UserVaultTokenConstraint",
      msg: "User vault token account constraint error.",
    },
    {
      code: 6030,
      name: "WithdrawalCollateralConstraint",
      msg: "Withdrawal collateral asset account constraint error.",
    },
    {
      code: 6031,
      name: "VaultCollateralConstraint",
      msg: "Vault collateral asset account constraint error.",
    },
    {
      code: 6032,
      name: "VaultTokenAccountConstraint",
      msg: "Vault's vault token account constraint error.",
    },
    {
      code: 6033,
      name: "OptionTokenConstraint",
      msg: "Option token account constraint error.",
    },
    {
      code: 6034,
      name: "WriterTokenConstraint",
      msg: "Writer token account constraint error.",
    },
    {
      code: 6035,
      name: "DepositReceiptConstraint",
      msg: "Deposit receipt constraint error.",
    },
    {
      code: 6036,
      name: "WithdrawalReceiptConstraint",
      msg: "Withdrawal receipt constraint error.",
    },
    {
      code: 6037,
      name: "FeeTokenAccountConstraint",
      msg: "Fee token account constraint error.",
    },
    {
      code: 6038,
      name: "EuroMetaConstraint",
      msg: "EuroMeta constraint error.",
    },
    {
      code: 6039,
      name: "UnsupportedStrategy",
      msg: "Unsuported Strategy.",
    },
    {
      code: 6040,
      name: "EuroProgramMismatch",
      msg: "Euro Primitive Program Id mismatch.",
    },
    {
      code: 6041,
      name: "DexMismatch",
      msg: "Serum DEX Program Id mismatch.",
    },
    {
      code: 6042,
      name: "OptionsAlreadyMinted",
      msg: "Options are already minted.",
    },
    {
      code: 6043,
      name: "AmountMustBeGreaterThanZero",
      msg: "Amount must be greater than 0.",
    },
    {
      code: 6044,
      name: "BpsLimitExceeded",
      msg: "Bps cannot exceed 10000",
    },
    {
      code: 6045,
      name: "PayoutForStaking",
      msg: "Cannot payout receipt that is set for staking.",
    },
    {
      code: 6046,
      name: "ReceiptNotForStaking",
      msg: "Cannot stake or claim reward for receipt, when receipt is not for staking.",
    },
    {
      code: 6047,
      name: "OwnerMismatch",
      msg: "Owner of staking record and receipt does not match.",
    },
    {
      code: 6048,
      name: "StakePoolMismatch",
      msg: "StakePool does not match.",
    },
    {
      code: 6049,
      name: "StakingRecordMismatch",
      msg: "StakingRecord does not match.",
    },
    {
      code: 6050,
      name: "InvalidLockupPeriod",
      msg: "Invalid lockup period selected.",
    },
    {
      code: 6051,
      name: "UnclaimedRewardPool",
      msg: "Some RewardPool is unclaimed.",
    },
    {
      code: 6052,
      name: "ClaimRewardPendingEpochEnd",
      msg: "Reward can only be claimed for DepositReceipt after epoch ends.",
    },
    {
      code: 6053,
      name: "MarketStateError",
      msg: "Error loading Serum market state.",
    },
    {
      code: 6054,
      name: "AuctionMintMismatch",
      msg: "The mint specified for the auction currency doesn't match the vault.",
    },
    {
      code: 6055,
      name: "TaskerSignerError",
      msg: "Tasker did not sign this transaction.",
    },
    {
      code: 6056,
      name: "TaskerValidationError",
      msg: "Account specified as tasker is not the authorized tasker on this vault.",
    },
    {
      code: 6057,
      name: "TaskerCollateralAccountValidationError",
      msg: "Collateral destination does not match vault's collateral account.",
    },
    {
      code: 6058,
      name: "EpochHistoryValidationError",
      msg: "Account specified as epoch history is not the epoch history on this vault.",
    },
    {
      code: 6059,
      name: "OracleConfidenceError",
      msg: "Pyth Oracle confidence too low to price accurately, try again later.",
    },
    {
      code: 6060,
      name: "OracleResponseIssue",
      msg: "Pyth Oracle responding with zero or negative price.",
    },
    {
      code: 6061,
      name: "OracleExponentIssue",
      msg: "Pyth Oracle esponding with non-negative exponent.",
    },
    {
      code: 6062,
      name: "OracleValidationError",
      msg: "Oracle doesn't match vault Oracle.",
    },
    {
      code: 6063,
      name: "TaskerMintMismatch",
      msg: "The mint used for tasker's payment doesn't match the collateral pool.",
    },
    {
      code: 6064,
      name: "TokenOwnerMismatch",
      msg: "Invalid owner of token account.",
    },
    {
      code: 6065,
      name: "TaskerNotEnoughAssets",
      msg: "Tasker is not bringing enough underlying assets, offer more assets.",
    },
    {
      code: 6066,
      name: "TaskerDeclaredPriceTooLow",
      msg: "Tasker's declared price is too low: offer a better exchange rate.",
    },
    {
      code: 6067,
      name: "TaskerDeclaredPriceTooHigh",
      msg: "Tasker's declared price is too high: check for typo.",
    },
    {
      code: 6068,
      name: "StagingAccountEmpty",
      msg: "The staging account has no assets: perhaps the auction has not ended?",
    },
    {
      code: 6069,
      name: "NumericalOverflow",
      msg: "Numerical Overflow",
    },
    {
      code: 6070,
      name: "OptionWriterMismatchError",
      msg: "Option and Writer token size mismatch.",
    },
    {
      code: 6071,
      name: "InvalidNativeMint",
      msg: "Invalid native mint provided",
    },
    {
      code: 6072,
      name: "InvalidReceiptOwner",
      msg: "Receipt owner provided does not match owner recorded",
    },
    {
      code: 6073,
      name: "OracleNotSupported",
      msg: "Instruction is not supported by oracle type.",
    },
  ],
  metadata: {
    address: "PSYFiYqguvMXwpDooGdYV6mju92YEbFobbvW617VNcq",
  },
};
