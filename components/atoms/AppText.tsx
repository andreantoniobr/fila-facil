import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

export default function AppText(props: TextProps) {
  return <Text {...props} style={[styles.default, props.style]} />;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Inter_400Regular",
  }
});
