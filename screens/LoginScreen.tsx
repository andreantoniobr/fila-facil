import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

// Verifique se o caminho da logo está correto no seu projeto
const logoStartApp = require('../assets/logo.svg');

const { width, height } = Dimensions.get('window');

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Tentando login com:', email, senha);
    navigation.navigate('Fila')
    // Aqui você pode adicionar sua lógica de autenticação
  };

  const handleForgotPassword = () => {
    console.log('Usuário esqueceu a senha');
    // Aqui você pode redirecionar para a tela de recuperação
  };

  const handleCreateAccount = () => {
    console.log('Redirecionando para criar conta');
    // Aqui você pode redirecionar para tela de cadastro
  };

  const handleSocialLogin = (platform:string) => {
    console.log(`Login com ${platform}`);
    // Aqui vai a integração com Google/Facebook/Apple
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>

            {/* LOGO */}
            <View style={styles.logoContainer}>
              <Image
                source={logoStartApp}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            {/* INPUT: Email */}
            <View style={styles.inputView}>
              <Icon name="envelope" size={20} color="#005FAF" style={styles.inputIcon} />
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#005FAF"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* INPUT: Senha */}
            <View style={styles.inputView}>
              <Icon name="lock" size={22} color="#005FAF" style={styles.inputIcon} />
              <TextInput
                style={styles.inputText}
                placeholder="Senha"
                placeholderTextColor="#005FAF"
                secureTextEntry
                onChangeText={setSenha}
                value={senha}
              />
            </View>

            {/* ESQUECEU A SENHA */}
            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotButtonContainer}
            >
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            {/* BOTÃO ENTRAR */}
            <TouchableOpacity
              style={[
                styles.loginBtn,
                { opacity: email && senha ? 1 : 0.6 },
              ]}
              onPress={handleLogin}
              disabled={!email || !senha}
            >
              <Text style={styles.loginTextBtn}>Entrar</Text>
            </TouchableOpacity>

            {/* CRIAR CONTA */}
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={styles.createAccountButton}
            >
              <Text style={styles.createAccountText}>Criar uma nova conta</Text>
            </TouchableOpacity>

            {/* SEPARADOR */}
            <Text style={styles.separatorText}>Ou continue com</Text>

            {/* LOGIN SOCIAL */}
            <View style={styles.socialButtonsContainer}>
              {/* Facebook */}
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Facebook')}
              >
                <Icon name="facebook" size={30} color="#3b5998" />
              </TouchableOpacity>

              {/* Google */}
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Google')}
              >
                <Icon name="google" size={30} color="#db4437" />
              </TouchableOpacity>

              {/* Apple */}
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Apple')}
              >
                <IconAntDesign name="apple" size={30} color="#000" />
              </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// --- ESTILOS ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: height * 0.07,
  },
  logoImage: {
    width: 250,
    height: 65,
    alignSelf: 'center',
  },
  inputView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  forgotButtonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingRight: 5,
  },
  forgotText: {
    color: '#005FAF',
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#005FAF',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginTextBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Inter_600SemiBold",
  },
  createAccountButton: {
    marginBottom: 25,
  },
  createAccountText: {
    color: '#333',
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  separatorText: {
    color: '#005FAF',
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "Inter_400Regular",
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
