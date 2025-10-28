import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import AppText from "../atoms/AppText";

interface LocalQueueDescriptionProps extends ViewProps {
  label: string;
  value: string;
}

export default function LocalQueueDescription({ label, value, style, ...rest }: LocalQueueDescriptionProps) {
  return (
    <View style={[styles.localQueueContainer, style]} {...rest}>
      <AppText style={styles.localQueueLabel}>{label}</AppText>
      <AppText style={styles.localQueueText}>{value}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  localQueueLabel: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#8C8C8C",
    marginRight: 5,
  },
  localQueueText: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#000",
  },
  localQueueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 15,
  },
});
