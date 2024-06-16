import React from "react";
import { View, StyleSheet } from 'react-native';
import Navigation from "./navigation/Navigation";


const App = () => {
  return <Navigation/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
