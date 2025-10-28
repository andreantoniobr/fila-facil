import React from "react";
import { ViewProps, Text, StyleSheet } from "react-native";
import Card from "./Card";
import CardTitle from "./atoms/CardTitle";
import Slider from "./Slider";

export default function QueueTicket({ style, ...rest }: ViewProps) {
  return (
    <Card centered>
      <CardTitle>Senha</CardTitle>
      <Text style={styles.queueTicketNumber}>A001</Text>
      <Slider></Slider>
    </Card>
  );
}

const styles = StyleSheet.create({
  queueTicketNumber: {
    fontSize: 65,
    lineHeight: 55,
    color: "#005FAF",
    fontFamily: "Inter_600SemiBold",
  },
});
