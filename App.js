import { StatusBar } from 'expo-status-bar';
import SignupLoginScreen from './Screen/SignupLoginScreen'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <SignupLoginScreen/> 
    </View>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#516352',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
