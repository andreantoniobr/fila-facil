import React from "react";
import { ViewProps, Text, StyleSheet } from "react-native";
import Card from "./Card";
import CardTitle from "./atoms/CardTitle";
import TimeSlider from "./TimeSlider";

export default function QueueTicket({ style, ...rest }: ViewProps) {
  return (
    <Card centered>
      <CardTitle>Senha</CardTitle>
      <Text style={styles.queueTicketNumber}>A001</Text>
      <TimeSlider></TimeSlider>
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
