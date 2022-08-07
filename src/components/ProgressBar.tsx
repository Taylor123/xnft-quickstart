import React from "react";
import { View } from "react-xnft";

export const ProgressBar: React.FC<{ percent: number }> = ({ percent }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 4,
        height: 4,
        position: "relative",
      }}
    >
      <View
        style={{
          background: "linear-gradient(90deg, #84F0F3 1.09%, #9CE28B 46.6%, #FF8F02 97.16%)",
          position: "absolute",
          borderRadius: 4,
          height: 4,
          left: 0,
          top: 0,
          bottom: 0,
          width: `${percent}%`,
        }}
      />
    </View>
  );
};
