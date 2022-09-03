import React from "react";
import { TextField } from "react-xnft";

export const NumberInput: React.FC<{
  onChange: (v: string) => void;
  placeholder?: string;
  value: string;
}> = ({ onChange, ...props }) => {
  const _onChange = ({ data }) => {
    onChange(data.value)
  }
  return (
    <TextField
      type="number"
      // TODO cannot style this properly due to non overridable input props
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderColor: "rgba(255, 255, 255, 0.15)",
        borderWidth: 1,
      }}
      onChange={_onChange}
      {...props}
    />
  );
};
