import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section'



export default class PhotoFeed extends Component {
 
state = { results : [{gender:''}]}
componentDidMount(){

    axios.get('https://randomuser.me/api/?results=10')
    
    .then(response => {
        
        console.log(response.status)
     
        this.setState({results: response.data})
        this.successShow(response);
        
    }).catch(this.errorShow);

}
  render() {
  
    return (
      <View>
        <Text> {this.state.results.gender} </Text>
      </View>
    );
  }
}
