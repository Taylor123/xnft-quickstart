import React from "react";
import { Button } from "react-xnft";

export const PsyButton: React.FC<{ children?: React.ReactNode, style?: Record<string, unknown> }> = ({
  style,
  ...props
}) => {
  return (
    <Button
      style={{
        backgroundColor: "#FFFFFF",
        color: "#141221",
        flex: 1,
        height: 44,
        width: "auto",
        ...style,
      }}
      {...props}
    />
  );
};
