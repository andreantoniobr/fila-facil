import React from "react";
import { TextProps, StyleSheet } from "react-native";
import AppText from "./AppText";

interface CardTitleProps extends TextProps {
  children: React.ReactNode;
}

export default function CardTitle({ children, style, ...rest }: CardTitleProps) {
  return (
    <AppText {...rest} style={[styles.default, style]}>
      {children}
    </AppText>
  );
}

const styles = StyleSheet.create({
  default: { 
    fontSize: 18,
    color: "#8C8C8C",
    textTransform: "uppercase", 
    marginBottom: 30
  },
});
