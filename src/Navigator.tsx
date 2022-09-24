import React from "react";
import { Stack } from "react-xnft";
import { Deposit } from "./views/Deposit";
import { Home } from "./views/Home";
import { Vault } from "./views/Vault";
import { Withdraw } from "./views/Withdraw";

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
      <Stack.Screen name="deposit" component={(props) => <Deposit {...props} /> } />
      <Stack.Screen name="home" component={(props) => <Home {...props} />} />
      <Stack.Screen name="vault" component={(props) => <Vault {...props} />} />
      <Stack.Screen name="withdraw" component={(props) => <Withdraw {...props} /> } />
    </Stack.Navigator>
  );
};
