import React, { Component } from 'react';
import { View, Text, FlatList, ListView, Image } from 'react-native';
import axios from 'axios';
import Icon from "react-native-vector-icons/Ionicons";
import PhotoSection from './photo-section'



export default class PhotoFeed extends Component {
 

  constructor(){
    super()
    this.state ={
      dataSource: []
    }
  }


  renderItem = ({item }) => {

    return(

      <View>
        <View style={styles.userContainer}>
          <Image 
          style={{width: 100, height: 100, borderRadius: 50}}
           source={{uri: item.picture.thumbnail }}
             />

           <Text style={styles.username}>{item.name.first}</Text>
      </View>
      <View>
         <Icon
      name="ios-heart-empty"
      color="green"
      size={25}
     />
     <Icon
       style={{paddingLeft: 13}}
       name="ios-create"
       color="green"
       size={25}
     />

 <Icon 
  style={{paddingLeft: 13}}
  name="ios-send"
  color="green"
  size={25}
 />

      </View>
      <View></View>
      <View></View>
     </View>
    )


  }

  componentDidMount() {
    const url = 'https://randomuser.me/api/?results=1'
    fetch(url)
    .then((response) => response.json())
   
    .then((responseJson) => {
    this.setState({
      dataSource: responseJson.results
  
    })
    console.log(responseJson)

    })
    .catch((error) =>{
      console.log(error)
    })
  }
  render() {
    return (

      <View>

        <FlatList 
        data={this.state.dataSource}
        renderItem={this.renderItem}
        />


      </View>
    )
  }

}




const styles = {
  username:{
    fontWeight: 'bold',
        padding: 2,
        paddingRight: 5,
     

  }, userContainer:{
    justifyContent: 'center',
        margin: 10,
        paddingTop: 2,


  }

}
