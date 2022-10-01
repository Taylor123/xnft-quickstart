import React from "react";
import { Button } from "react-xnft";

export const Checkbox: React.FC<{ checked: boolean; onClick?: () => void }> = ({
  checked,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: checked ? "#FFFFFF" : "transparent",
        border: "1px solid #FFFFFF",
        borderRadius: 20,
        color: '#141221',
        padding: 0,
        height: 20,
        minWidth: 20,
        width: 20,
      }}
    >
      {checked ? "✓" : ""}
    </Button>
  );
};