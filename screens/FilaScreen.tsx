import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Container from "../components/atoms/Container";
import Queue from "../components/Queue";
import QueueTicket from "../components/QueueTicket";
import LocalQueue from "../components/LocalQueue";

export default function FilaScreen() {
  return (
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <LocalQueue />
          <QueueTicket />
          <Queue />
        </Container>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  icon: {
    fontSize: 26,
    color: "#4C4C4C",
  },
});
