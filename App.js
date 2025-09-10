import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, StyleSheet, Pressable } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(false); // controla qual página mostrar

  const handleLogin = () => {
    Alert.alert('Login realizado com sucesso!');
  };

  const handleRegistrar = () => {
    Alert.alert('Registro realizado com sucesso!');
  };

  const handleRedefinirSenha = () => {
    Alert.alert('Tela de redefinição de senha em breve!');
  };

  /* Validação do formulário */
  const isFormValid = email.trim() !== '' && senha.trim() !== '';

  // Função para alternar páginas e resetar os campos de email e senha
  const togglePage = (loginPage) => {
    setIsLoginPage(loginPage);
    setEmail('');  // reseta email
    setSenha('');  // reseta senha
  };

  return (
    <View style={styles.container}>
      /* Logo do App */
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      /* Página de login */
      {isLoginPage ? (
        <>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <View style={styles.buttonContainer}>
            <Button title="ENTRAR" onPress={handleLogin} disabled={!isFormValid} />
          </View>

          <View style={styles.linksRow}>
            <Pressable onPress={() => togglePage(false)}>
              <Text style={styles.link}>Registrar-se</Text>
            </Pressable>

            <Pressable onPress={handleRedefinirSenha}>
              <Text style={styles.link}>Redefinir a Senha</Text>
            </Pressable>
          </View>
        </>
      ) : (
        
        /* Página de registro */
        <>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senh"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <View style={styles.buttonContainer}>
            <Button title="Registrar-se" onPress={handleRegistrar} disabled={!isFormValid} />
          </View>

          <View style={styles.linksRow}>
            <Pressable onPress={() => togglePage(true)}>
              <Text style={styles.link}>Login</Text>
            </Pressable>

            <Pressable onPress={handleRedefinirSenha}>
              <Text style={styles.link}>Redefinir a Senha</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 230,
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 70,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
  },
  link: {
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  linksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 15,
  },
});