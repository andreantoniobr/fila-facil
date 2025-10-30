import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Container from "../components/atoms/Container";
import Queue from "../components/Queue";
import QueueTicket from "../components/QueueTicket";
import LocalQueue from "../components/LocalQueue";
import Footer from "../components/Footer";

export default function FilaScreen() {
  return (
    <>
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
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
});
