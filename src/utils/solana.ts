import { Spl } from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
import { Connection, PublicKey } from "@solana/web3.js";

export async function fetchTokens(
  publicKey: PublicKey,
  connection: Connection
): Promise<Map<string, any>> {
  const tokenClient = Spl.token(window.xnft);
  //
  // Fetch the accounts.
  //
  const resp = await connection.getTokenAccountsByOwner(
    publicKey,
    {
      programId: TOKEN_PROGRAM_ID,
    });
  //
  // Decode the data.
  //
  const tokens: Array<[string, any]> = resp.value.map(
    ({ account, pubkey }: any) => {
      const tokenAccount = tokenClient.coder.accounts.decode(
        "token",
        account.data
      );
      return [
        tokenAccount.mint.toString(),
        {
          ...tokenAccount,
          key: pubkey,
        },
      ];
    }
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
