import React from 'react';
import { View } from "react-xnft";

export const Header = ({ children }) => {
  return (
    <View style={{ marginBottom: 12, marginTop: 12, marginLeft: 20 }}>
      {children}
    </View>
  )
}