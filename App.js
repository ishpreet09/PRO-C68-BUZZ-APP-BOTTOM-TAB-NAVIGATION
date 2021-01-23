import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Fb from './screens/fb';
import In from './screens/in';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component{
  render(){
    return (
    

    <AppContainer/>
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  FaceBook:{screen:Fb},
  InstaGram:{screen:In}
})

const AppContainer=createAppContainer(TabNavigator);