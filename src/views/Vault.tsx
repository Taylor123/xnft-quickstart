import React from "react";
import { Text, View } from "react-xnft";

export const Vault: React.FC<{ id: string }> = ({ id }) => {
  return (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
      <Text>Vault Details {id}</Text>
    </View>
  );
};
