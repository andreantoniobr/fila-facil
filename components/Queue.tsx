import React from "react";
import { View, Image, ViewProps, Text, StyleSheet } from "react-native";
import Card from "./Card";
import CardTitle from "./atoms/CardTitle";
import Button from "./atoms/Button";

import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../App';

type FilaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Fila'>;

export default function Queue({ style, ...rest }: ViewProps) {
  const navigation = useNavigation<FilaScreenNavigationProp>();
  return (
    <Card centered style={style} {...rest}>
      <CardTitle>Pessoas a sua frente</CardTitle>
      <View style={styles.queueContainer}>
        <Image
          source={require("../assets/queue-icon.svg")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.queueAmount}>07</Text>
      </View>
      <Button title="Sair da fila" bgColor="#C62725" textColor="#fff" onPress={() => navigation.navigate('Login')} />
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 57,
    height: 40,
    marginRight: 20,
  },
  queueAmount: {
    fontSize: 60,
    lineHeight: 55,
    color: "#005FAF",
    fontFamily: "Inter_600SemiBold",
  },
  queueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
