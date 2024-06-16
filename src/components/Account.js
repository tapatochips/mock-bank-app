import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { auth } from '../firebase';

//mock data for time being
const Account = ({ navigation }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          navigation.navigate('Login'); 
        }
      });
  
      return () => unsubscribe();
    }, [navigation]);
  
    const handleLogout = async () => {
      try {
        await auth.signOut();
        navigation.navigate('Home'); 
      } catch (error) {
        alert(error.message); 
      }
    };
  
    if (!user) {
      return null; 
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Account Overview</Text>
        <Text style={styles.userInfo}>Welcome, {user.email}</Text>
        <Text style={styles.balance}>Balance: ${accountData.balance.toFixed(2)}</Text>
  
        <Text style={styles.transactionsTitle}>Recent Transactions:</Text>
        <FlatList
          data={accountData.transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text>{item.date} - {item.description}: ${item.amount.toFixed(2)}</Text>
            </View>
          )}
        />
  
        <Button title="Logout" onPress={handleLogout} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    userInfo: {
      fontSize: 18,
      marginBottom: 20,
    },
    balance: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    transactionsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    transactionItem: {
      marginBottom: 10,
    },
  });
  
  export default Account; 