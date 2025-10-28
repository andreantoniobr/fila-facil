import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView // Para lidar com áreas seguras em iOS e Android
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Para Facebook e Google
import IconAntDesign from 'react-native-vector-icons/AntDesign'; // Para Apple

const { width } = Dimensions.get('window');

// Você precisará adicionar o logo da FILAFÁCIL ao seu projeto
// Por exemplo, na pasta assets/logo.png
// const logoFilaFacil = require('./assets/logo.png'); // Descomente e ajuste o caminho

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Email:', email, 'Senha:', senha);
  };

  const handleForgotPassword = () => {
    // Navegar para tela de 'Esqueceu a senha?'
    console.log('Esqueceu a senha?');
  };

  const handleCreateAccount = () => {
    // Navegar para tela de 'Criar nova conta'
    console.log('Criar uma nova conta');
  };

  const handleSocialLogin = (platform: string) => {
    // Lógica de login social (Facebook, Google, Apple)
    console.log('Login com', platform);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>

        {/* LOGO (Substitua por um <Image> real com a sua imagem) */}
        <View style={styles.logoContainer}>
          {/*
          <Image
            source={logoFilaFacil}
            style={styles.logo}
            resizeMode="contain"
          />
          */}
          {/* Placeholder para o logo com o texto FILAFÁCIL */}
          <Text style={styles.logoText}>
             <Text style={styles.logoTextBlue}>👨‍👩‍👧</Text> FILAFÁCIL
          </Text>
        </View>

        {/* INPUT: Email */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#999"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* INPUT: Senha */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
            onChangeText={text => setSenha(text)}
            value={senha}
          />
        </View>

        {/* ESQUECEU A SENHA? */}
        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotButton}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* BOTÃO: Entrar */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginTextBtn}>Entrar</Text>
        </TouchableOpacity>

        {/* CRIAR NOVA CONTA */}
        <TouchableOpacity onPress={handleCreateAccount} style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Criar uma nova conta</Text>
        </TouchableOpacity>

        {/* Separador OU CONTINUE COM */}
        <Text style={styles.separatorText}>Ou continue com</Text>

        {/* BOTÕES SOCIAIS */}
        <View style={styles.socialButtonsContainer}>
          {/* Facebook */}
          <TouchableOpacity
            style={[styles.socialButton, styles.facebookButton]}
            onPress={() => handleSocialLogin('Facebook')}
          >
            <Icon name="facebook" size={30} color="#fff" />
          </TouchableOpacity>

          {/* Google */}
          <TouchableOpacity
            style={[styles.socialButton, styles.googleButton]}
            onPress={() => handleSocialLogin('Google')}
          >
            <Icon name="google" size={30} color="#fff" />
          </TouchableOpacity>

          {/* Apple (Usando AntDesign 'apple1' ou outro ícone se preferir) */}
          <TouchableOpacity
            style={[styles.socialButton, styles.appleButton]}
            onPress={() => handleSocialLogin('Apple')}
          >
            <IconAntDesign name="apple1" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// --- ESTILOS ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Cor de fundo da área segura, para a borda cinza clara
  },
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo branca, como no layout
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingTop: 50,
    // Adiciona uma sombra/borda leve ao redor da caixa de login
    margin: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    // Estilo para o texto 'Login' no topo, se for um cabeçalho real da tela
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
    // Estilo para centralizar e ajustar o logo
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  logoTextBlue: {
    color: '#007bff', // Cor azul para os bonecos do logo
  },
  // Se for usar uma imagem real do logo:
  // logo: {
  //   width: 200, // Ajuste conforme o tamanho do seu logo
  //   height: 60,
  // },
  inputView: {
    width: '100%',
    backgroundColor: '#f0f0f0', // Fundo cinza claro para o campo de input
    borderRadius: 5,
    height: 50,
    marginBottom: 15,
    justifyContent: 'center',
    padding: 15,
  },
  inputText: {
    height: 50,
    color: '#333',
    fontSize: 16,
    padding: 0, // Remover padding default se houver
  },
  forgotButton: {
    width: '100%',
    alignItems: 'flex-end', // Alinhar o texto à direita
    marginBottom: 20,
    paddingRight: 5,
  },
  forgotText: {
    color: '#007bff', // Cor azul
    fontSize: 14,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#007bff', // Cor azul para o botão principal
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginTextBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginBottom: 30,
  },
  createAccountText: {
    color: '#333',
    fontSize: 15,
  },
  separatorText: {
    color: '#999',
    fontSize: 14,
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25, // Para ser circular
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  facebookButton: {
    backgroundColor: '#3b5998', // Cor do Facebook
  },
  googleButton: {
    backgroundColor: '#db4437', // Cor do Google
  },
  appleButton: {
    backgroundColor: '#000000', // Cor da Apple
  },
});

export default LoginScreen;