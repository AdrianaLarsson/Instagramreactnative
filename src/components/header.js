import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
export default class Header extends Component{
    render(){
        return (
            <View style={styles.container}>
                    <Icon
       name="ios-heart-half"
       color="blue"
       size={50}

     />

    <Text style={styles.text}> Adrianas Dummy app</Text>
    

            </View>
        )
    }
}

const styles = {
    container:{
        backgroundColor: '#f8f8f8',
        paddingTop: 14,
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 3,
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 13,
       
    }


}

   {/* <Icon style={styles.container}
    name="ios-tv"
    color="green"
    size={25}
    paddingLeft={5}
    />
    <Icon
    name="ios-send"
    color="green"
    size={25}
       /> */}