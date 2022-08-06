import { useEffect } from "react";
import ReactXnft, { Text, View } from "react-xnft";
import { Header } from "./components/Header";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <View>
      <Header>
        <Text>PsyFi</Text>
      </Header>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 12 }}>
        <Text>My position value</Text>
        <Text>$0.0</Text>
        <Text>Reward</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 42,
          }}
        >
          <Text>0.0 SRM</Text>
          <Text>Claim</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 44,
          }}
        >
          <Text>Vault</Text>
          <Text>Only my positions</Text>
        </View>
      </View>
    </View>
  );
}
