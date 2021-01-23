import React from 'react';
import {  Text, View } from 'react-native';
import AppHeader from '../AppHeader';

export default class Fb extends React.Component{
    render(){
        return(
        <View  >
                <AppHeader/>
        <Text style={{ 
            color:'purple',
            fontSize:20,
            textAlign:'center',
            fontWeight:'bold',
            marginTop:300,
             }}>
            Facebook
        </Text>            
        </View>
        )
    }
}