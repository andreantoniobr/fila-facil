import React from "react";
import { View, Image, ViewProps, Text, StyleSheet } from "react-native";
import Card from "./Card";
import LocalQueueDescription from "./molecules/LocalQueueDescription";

export default function LocalQueue({ style, ...rest }: ViewProps) {
  return (
    <Card style={style} {...rest}>
      <Image
        source={require("../assets/maternidade.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />
    <LocalQueueDescription label="Unidade:" value="Maternidade" />
    <LocalQueueDescription label="Serviço:" value="Pré Natal" />
    <LocalQueueDescription label="Atendimento:" value="Preferencial" />

    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
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
    marginBottom: 30,
  },
});
