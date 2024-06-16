import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; 
import { auth } from '../firebase';

const Login = ({ navigation }) => {
    //state vars for user and pass
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //func to login
    const handleLogin = async () => {
        try {
            //attempt to sign in
            await auth.signInWithEmailAndPassword(email, password);
            navigation.navigate('Account'); //if success nav to acct
        } catch (error) {
            alert(error.message);
        }
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );


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