import { Provider } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

declare global {
  interface Window {
    xnft: Provider & {
      publicKey: PublicKey;
    };
  }
}
