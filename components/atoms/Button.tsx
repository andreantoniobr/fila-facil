import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
  ViewStyle,
} from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  bgColor?: string;
  textColor?: string;
}

export default function Button({
  title,
  bgColor = "#3f75fc",
  textColor = "#fff",
  style,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: bgColor, opacity: pressed ? 0.8 : 1 },
        style as ViewStyle,
      ]}
      {...rest}
    >
      <Text
        style={[styles.buttonText, { color: textColor }]}
        selectable={false}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
});
