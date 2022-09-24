import React, { useState } from "react";
import ReactXnft, { Button, TextField, View } from "react-xnft";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  const [size, setSize] = useState("");
  console.log("size ", size);

  const onClick = () => {
    console.log('taylor onClick', size);
    method();
  }
  const method = () => {
    console.log('taylor method', size)
  }

  return (
    <View>
      <TextField onChange={(e) => setSize(e.data.value)} />
      <Button onClick={() => onClick()}>Click me</Button>
    </View>
  );
}
