import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Provider } from 'react-native-paper';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Simular lógica de autenticação
    const isAuthenticated = true;
    onLogin(isAuthenticated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        theme={{ colors: { primary: '#006400' } }} // Defina a cor de fundo do botão como verde
      >
        Entrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: 200,
  },
});

export default Login;
