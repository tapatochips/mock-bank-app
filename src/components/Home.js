import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to My Bank App</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
});

export default Home;