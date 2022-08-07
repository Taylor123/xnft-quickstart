import React from "react";
import { Text } from "react-xnft";

export const Typography: React.FC<{
  color: keyof typeof colors;
  children: React.ReactNode;
  // TODO better style type
  style?: Record<string, any>;
  variant: keyof typeof variants;
}> = ({ color, children, style = {}, variant }) => {
  return (
    <Text style={{ color: colors[color], ...variants[variant], ...style }}>
      {children}
    </Text>
  );
};

const colors = {
  primary: "rgba(255, 255, 255, 0.65)",
  title: "#FFFFFF",
};

 // TODO better naming
const variants = {
  text1: { fontSize: 13, fontWeight: 500 },
  text2: { fontSize: 16, fontWeight: 600 },
  text3: { fontSize: 12, fontWeight: 400 },
};
