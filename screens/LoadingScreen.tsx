import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";


type LoadingScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoadingScreenScreenNavigationProp;
};

export default function LoadingScreen({ navigation }: Props) {
  return (
 <Pressable
      style={{ flex: 1 }}
      onPress={() => navigation.navigate("Login")}
    >
      <ImageBackground
        source={require("../assets/loading-bg.svg")}
        style={styles.background}
        resizeMode="cover"
      >
        <Image
            source={require("../assets/logo-white.svg")}
            style={styles.logo}
            resizeMode="contain"
          />
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  logo: {
    width: 250,
    height: 65,
  },
});
