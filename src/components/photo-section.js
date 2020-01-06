import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default class PhotoSection extends Component {

  render() {
    return (
      <View style={styles.container}>
          
          <View style={styles.thumbnailSection}>
              <Image 
              
              
              style={styles.thumbnail}
              source={{uri:'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/67453450_10156524290021239_3382504324348248064_o.jpg?_nc_cat=107&_nc_oc=AQlmWTRg0VhULGEVdOZvMan82U4XEj-CCNCYxa9Y3Jzrnfu6vBHhTs_DeUI1ZTIQtyo&_nc_ht=scontent-arn2-1.xx&oh=e56e4807382c6b334b88984a5436d179&oe=5EB003BC'}} />
              <View style={styles.userContainer}>
              <Text style={styles.username}>apedrozalarsson</Text>
              </View>
          </View>
          <View>
                <Image
                 style={{width: null, height: 300}}
                source={{uri:'https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/19149298_10154724922311239_68018037886758955_n.jpg?_nc_cat=100&_nc_oc=AQk_23BiaiVCcGQCzuJFptR8tjKNG49kYgTIs0-Nu5R6xfFRGT_EJT7TdBOmg--JS4M&_nc_ht=scontent-arn2-2.xx&oh=5d5d551d31e1dcb9956b23c8f0e05b32&oe=5EA9D14C'}} />
          </View>
          <View style={styles.likebutton}>
    
               <Icon
  name="ios-heart-empty"
  color="green"
  size={25}


/>
<Icon style={{paddingLeft: 13}}
  name="ios-create"
  color="green"
  size={25}

  

/>

               <Icon style={{paddingLeft: 13}}
  name="ios-send"
  color="green"
  size={25}

  

/>

          </View>
          <View style={styles.imageMeta}> 
          <Text style={styles.caption}>Gillas av ..</Text>
              <Text style={styles.username}>apedrozalarsson</Text>
              
          </View>
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
        margin: 10,
        paddingTop: 2,
    },imageMeta: {
       // flexDirection: 'row',
        paddingRight: 5,
    },username: {
        fontWeight: 'bold',
        padding: 2,
        paddingRight: 5
    }, likebutton: {
       flexDirection: 'row',
       padding: 3

    }, 
    caption: {
      paddingLeft: 2,
      padding: 10,
    }
}