import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './src/components/header'
import PhotoSection from './src/components/photo-section'
import Dummy from './src/components/dummy'
import PhotoFeed from './src/components/photo-feed'
import Middle from './src/components/middle'



export default function App () {
 
  return (
  
    <View>
<ScrollView>
      <Header text="Adrianas Instagram app" />
      {/* <PhotoFeed /> */}
      {/* <PhotoSection />
      <PhotoSection /> */}
      {/* <Dummy /> */}
      <Middle />
       <PhotoSection />
       <PhotoSection /> 
       <PhotoSection /> 
       </ScrollView>
    </View>
   


  );
}
