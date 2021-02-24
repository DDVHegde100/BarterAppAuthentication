import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'


export default function App(){
  return(
    <AppContainer/>
  )
}
const switchnavigator=createAppContainer({
  SignupLoginScreen:{screen:Sign}
})
const AppContainer=createAppContainer(switchnavigator)

const styles=StyleSheet.create({
  SignupLoginScreen:{
flex:1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems:'center'
  }
})