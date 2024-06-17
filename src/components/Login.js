import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; 
import { auth } from '../firebase';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        navigation.navigate('Account'); // Navigate to Account screen on success
      } catch (error) {
        alert(error.message); // Show error message on failure
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} /> {/* Button to trigger login */}
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});

export default Login;