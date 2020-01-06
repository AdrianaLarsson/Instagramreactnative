import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
export default class Header extends Component{
    render(){
        return (
            <View style={styles.container}>
                    <Icon
  name="logo-instagram"
  color="blue"
  size={50}
 


/>
    <Text style={styles.container}> {this.props.text}</Text>
    <Icon style={styles.container}
    name="ios-tv"
  color="green"
  size={25}
  paddingLeft={5}
 

  

/>
    <Icon
    name="ios-send"
  color="green"
  size={25}

  

/>

            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        paddingRight: 30,
        paddingLeft: 14,
        paddingBottom: 5,
         paddingTop: 20,
         alignItems: 'center',
         borderBottomColor: 'darkblue',
         borderBottomWidth: 2,
         flexDirection: 'row',
         fontWeight: 'bold'
         
       
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5
    }
}