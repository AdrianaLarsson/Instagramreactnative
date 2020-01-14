import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class InstgramPhotoSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
                 <View style={styles.thumbnailSection}>
                     <Image style={styles.thumbnail}
                   
                     source={{uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/66649354_10156501694456239_5532812759453925376_o.jpg?_nc_cat=103&_nc_oc=AQnN4As0yURjhMRGYhkCLT9Jrz3DyKrTT-yejfg5NpV6EFbcedB2cFY9QSPWAHqUpP0&_nc_ht=scontent-arn2-1.xx&oh=60f9ef1f0a511b2519113129b0be62ce&oe=5EA31186'}} />
                     <View style={styles.userContainer}>
                     <Text>username</Text>
                     </View>
                 </View>
                 <View>
                 <Image
                  style={{width: null, height: 400, paddingTop: 20}}
                 source={{uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/10421952_10152678214006239_2806363558455944961_n.jpg?_nc_cat=103&_nc_oc=AQlbidty3MrPJTvK_yM2ccCXkHON7tYwoWK5pSmjiFgy1ukAJGJCaS159cOJzVtg45w&_nc_ht=scontent-arn2-1.xx&oh=a56993963c9aa6832d2e3d9f853cb649&oe=5EA5DA66'}} />
                 </View>
                 
                 
              
                 <View>
                     
                     
                 <Icon style={styles.likeIcon}
                        style={{paddingLeft: 13}}
                       name="ios-heart-empty"
                       color="#f0f"
                       size={25}
                       />
                    
                 </View>
                 <View style={styles.imageMeta}>
              
                     <Text style={styles.username}>username</Text>
                     <Text>caption</Text>
                 </View>
        </View>
    );
  }
}

const styles ={ 
    container:{
        margin: 10,
    },thumbnailSection:{
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },thumbnail:{
        width: 65,
        height: 65,
        borderRadius: 35,
        margin: 5,
    },userContainer:{
        justifyContent: 'center',
        padding: 5,
    },imageMeta:{
        flexDirection: 'row',
        padding: 5,
    },username:{
        fontWeight: 'bold',
        paddingRight: 5,

    },likeIcon:{
        margin: 12,
        paddingTop: 30,
        paddingBottom: 10,
      }
  
    }


