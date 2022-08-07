import React from "react";
import ReactXnft, { Text, View } from "react-xnft";
import { TokenContextProvider } from "./components/TokenContext";
import { VaultContextProvider } from "./components/VaultContext";
import { Navigator } from "./Navigator";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <TokenContextProvider>
      <VaultContextProvider>
        <Navigator />
      </VaultContextProvider>
    </TokenContextProvider>
  );
}
