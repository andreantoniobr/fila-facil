import React from "react";
import { View, StyleSheet, ViewProps} from "react-native";

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  centered?: boolean;
}

export default function Container({ children, style, centered, ...rest }: ContainerProps) {
  return (
    <View
      style={[
        styles.container,
        centered && styles.centered,
        style
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  centered: {
    justifyContent: "center",
  },
});

