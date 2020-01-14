import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Header from './src/components/header'
import PhotoSection from './src/components/photo-section'
import Todo from './src/components/todo'
import Note from './src/components/note'
import Middle from './src/components/middle'
import FirstScreen from './src/components/firstScreen'
import AddScreen from './src/components/addScreen'
import ListScreen from './src/components/listScreen'
import Instagram from './src/components/instagram'
import InstagramPhotoSection from './src/components/instgram-photo-sec'





class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
     

<ScrollView>
      <Header text="" />

   
        <Middle />
       <PhotoSection />
       <PhotoSection /> 
       <PhotoSection />   
   
      </ScrollView>
    </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       

        <Todo />
       
        
      </View>
    );
  }
}

class AdddS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       

        <AddScreen />
       
        
      </View>
    );
  }
}

class ListS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       

        <ListScreen />
       
        
      </View>
    );
  }
}

class Insta extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       

        <Instagram />
        <InstagramPhotoSection />

       
       
        
      </View>
    );
  }
}



const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Todo: SettingsScreen,
  ListS: ListS,
  AdddS:AdddS,
  Instagram: Instagram
 

});

export default createAppContainer(TabNavigator);

