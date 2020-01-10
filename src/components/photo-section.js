import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';



export default class PhotoSection extends Component {


  constructor(){
    super()
    this.like = false
    this.state ={
      dataSource: [],
      heartIcon: 'ios-heart-empty'
    }
    
    
  }

  toggleLike () {

    
    this.like = !this.like
    if (this.like){
      this.setState({heartIcon: 'ios-heart-empty'})
      console.log('heartIcon: ios-heart-empty')
    }else{
      this.setState({heartIcon: 'ios-heart'})
      console.log('heartIcon: ios-heart')
    }
  }
  
  renderItem = ({item }) => {
  
    return(

      <View style={styles.container}>
        <View style={styles.userContainer}>
    <Text>{item.name.first} {item.name.last}</Text>
     
            <Text style={styles.username}></Text>
            <Text>{item.login.username}</Text>
            <Image 
           
          style={{width: 100, height: 100, borderRadius: 50}}
           source={{uri: item.picture.thumbnail }}
             />

          </View>
    <View >
      
      {item.gender =='female'?  <Text>Kvinna</Text>: null}
      {item.gender == 'male'? <Text>Man</Text>: null}
      </View>
        <View>
       

        </View>
        <View >

<Text>{item.email}</Text>

    </View >
  
        <View style={styles.likebutton}>
        <TouchableHighlight>
             <Icon 
             
                name={this.state.heartIcon}
                color='#f0f'
                size={25}
                onPress={this.toggleLike.bind(this)}
             />
         </TouchableHighlight>
 
            <Icon style={{paddingLeft: 13}}
            name="ios-create"
            color="#f0f"
            size={25}
            />

             <Icon style={{paddingLeft: 13}}
             name="ios-send"
             color="#f0f"
             size={25} 
             />
        </View>

        


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
      
    );
  }
}
const styles = {
    container: {
        margin: 10,
    }, thumbnailSection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },userContainer: {
        justifyContent: 'center',
        margin: 8,
        paddingTop: 2,
        flexDirection: 'row',
    },imageMeta: {
       // flexDirection: 'row',
        paddingRight: 5,
    },username: {
        fontWeight: 'bold',
        padding: 20,
       
       
    }, likebutton: {
       flexDirection: 'row',
       padding: 3

    }, 
    caption: {
      paddingLeft: 2,
      padding: 10,
    }
}

