import React from "react"; 
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="confirmation-number" style={styles.icon} />
        <Text style={styles.text}>Retirar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="history" style={styles.icon} />
        <Text style={styles.text}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="person" style={styles.icon} />
        <Text style={styles.text}>Meu Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="settings" style={styles.icon} />
        <Text style={styles.text}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  button: {
    flex: 1, // cada botão ocupa 25% da largura
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter_400Regular",
    paddingVertical: 20,
  },
  text: {
    fontSize: 12,
    marginTop: 3,
    color: "#4C4C4C",
    fontFamily: "Inter_600SemiBold",  
  },
  icon: {
    fontSize: 26,
    color: "#4C4C4C",
  }
});
