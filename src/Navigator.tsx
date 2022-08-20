import React from "react";
import { Stack } from "react-xnft";
import { Deposit } from "./views/Deposit";
import { Home } from "./views/Home";
import { Vault } from "./views/Vault";

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRoute={{ name: "home" }}
      options={({ route }) => {
        switch(route.name) {
          case 'deposit':
            return { title: 'Deposit' }
          case 'vault':
            return { title: 'Vault Details' }
          default:
            return { title: '' }
        }
      }}
    >
      <Stack.Screen name="deposit" component={Deposit} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="vault" component={Vault} />
    </Stack.Navigator>
  );
};
