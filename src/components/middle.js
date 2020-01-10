import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class Middle extends Component {
  constructor(){
    super()
    this.state ={
      dataSource: []
    }
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


renderItem = ({item }) =>{

  return(
     <View style={styles.iconerows}>
     
    </View>




  )
}



  render() {
    return (
      <View style={styles.iconerows}>



{/* <FlatList 
data={this.state.dataSource}
renderItem={this.renderItem}
/> */}
</View>

    );
  }
}

const styles = {
    iconerows: {
        backgroundColor: "pink",
        paddingBottom: 15,
         paddingTop: 15,
         alignItems: 'center',
         borderBottomColor: 'darkblue',
         borderBottomWidth: 2,
         flexDirection: 'row',
         fontWeight: 'bold'
    },thumbnail: {
        width: 80,
        height: 80,
        margin: 3,
        borderRadius: 45,
    }
}