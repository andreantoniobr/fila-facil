import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

interface CardProps extends ViewProps {
  children: React.ReactNode;
   centered?: boolean;
}

export default function Card({ children, style, centered = false, ...rest }: CardProps) {
  return (
    <View style={[styles.card, centered && styles.centered, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom:30,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
});
