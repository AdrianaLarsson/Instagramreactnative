import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class Middle extends Component {


  render() {
    return (
      <View style={styles.iconerows}>
          
        <Image 
    
      style={styles.thumbnail}
      source={{uri:'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/10364165_10152152189096239_6297276905365775827_n.jpg?_nc_cat=104&_nc_oc=AQl5en64w2RZPkNTYQOgMQcpcPyUKIF94DRY9JYXAC3jleTopMzbjRzJL-6YfKJ5_PQ&_nc_ht=scontent-arn2-1.xx&oh=8251b30eca0071c9feaab16a7cb704cf&oe=5EAFD2B8'}} />
           
           <Image 
    
    style={styles.thumbnail}
    source={{uri:'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/10421952_10152678214006239_2806363558455944961_n.jpg?_nc_cat=103&_nc_oc=AQlH48FPozDqmHZ72yBe0pTPw0mRsvUw8ULYDGP7JIFcG_P4DnGfL8ZnGVVAKA4OXEs&_nc_ht=scontent-arn2-1.xx&oh=87e0cfae08720ccd871343560ef6b4ad&oe=5EA5DA66'}} />
           <Image 
    
    style={styles.thumbnail}
    source={{uri:'https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/11009840_10152795631936239_369120106532916258_n.jpg?_nc_cat=108&_nc_oc=AQnnmEW3Jv3K4oZHgJndR-Sic8KArj-7gCKBoWOy7Cmz7HgI9qDL-dIY7YADZ1A7_9s&_nc_ht=scontent-arn2-2.xx&oh=fcbee0cf6ea0723c470dc671778f0f38&oe=5EAC6D34'}} />
           <Image 
    
    style={styles.thumbnail}
    source={{uri:'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11150313_10152829580936239_6581575396715382760_n.jpg?_nc_cat=103&_nc_oc=AQk2Yvt-gIpzrvf8oPL7VGqYWRQVGt8AAhhr-hPb7VwLL257twu-qUw2r9clJMaB2hY&_nc_ht=scontent-arn2-1.xx&oh=787423125188f7b8ff244962af2648e2&oe=5E9BA847'}} />
           
      </View>
    );
  }
}

const styles = {
    iconerows: {
        backgroundColor: "pink",
        paddingRight: 30,
        paddingLeft: 14,
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