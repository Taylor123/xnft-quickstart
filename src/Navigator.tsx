import React from "react";
import { Stack } from "react-xnft";
import { Home } from "./views/Home";
import { Vault } from "./views/Vault";

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRoute={{ name: "home" }}
      options={({ route }) => ({ title: route.name })}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="vault" component={Vault} />
    </Stack.Navigator>
  );
};
