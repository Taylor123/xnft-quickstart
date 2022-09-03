import React from "react";
import ReactXnft from "react-xnft";
import { TokenAccountContextProvider } from "./components/TokenAccountContext";
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
    <TokenAccountContextProvider>
      <TokenContextProvider>
        <VaultContextProvider>
          <Navigator />
        </VaultContextProvider>
      </TokenContextProvider>
    </TokenAccountContextProvider>
  );
}
