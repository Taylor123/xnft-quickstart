import { Spl } from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
import { PublicKey } from "@solana/web3.js";

export async function fetchTokens(
  publicKey: PublicKey
): Promise<Map<string, any>> {
  const tokenClient = Spl.token(window.xnft);
  //
  // Fetch the accounts.
  //
  const resp = await window.xnft.connection.getTokenAccountsByOwner(
    publicKey,
    {
      programId: TOKEN_PROGRAM_ID,
    }
  );
  //
  // Decode the data.
  //
  const tokens: Array<[string, any]> = resp.value.map(
    ({ account, pubkey }: any) => [
      pubkey.toString(),
      {
        ...tokenClient.coder.accounts.decode("token", account.data),
        key: pubkey,
      },
    ]
  );
  //
  // Filter out any invalid tokens.
  //
  const validTokens = tokens.filter(([, t]) => t.amount.toNumber() >= 1);
  //
  // Done.
  //
  return new Map(validTokens);
}
