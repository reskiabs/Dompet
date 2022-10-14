import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

