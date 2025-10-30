import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./screens/LoadingScreen";
import FilaScreen from "./screens/FilaScreen";
import AppLoading from "expo-app-loading"; // exibe splash até carregar as fontes
import LoginScreen from "./screens/LoginScreen";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export type RootStackParamList = {
  Login: undefined;
  Fila: undefined;
  Loading: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />; // aguarda o carregamento das fontes

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          cardStyle: { flex: 1 },
        }}
      >
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Fila" component={FilaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
