import React from 'react';
import {  Text, View } from 'react-native';
import AppHeader from '../AppHeader';

export default class In extends React.Component{
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
            Instagram
        </Text>            
        </View>
        )
    }
}