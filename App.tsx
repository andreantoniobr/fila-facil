import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import LoginScreen2 from './screens/LoginScreen2';
import FilaScreen from './screens/FilaScreen';
import AppLoading from "expo-app-loading"; // exibe splash até carregar as fontes
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";

export type RootStackParamList = {
  Login: undefined;
  Fila: undefined;
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
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Fila" component={FilaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
