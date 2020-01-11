import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Header from './src/components/header'
import PhotoSection from './src/components/photo-section'
import Todo from './src/components/todo'
import Note from './src/components/note'
import Middle from './src/components/middle'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
     

<ScrollView>
      <Header text="Adrianas Dummy app" />

   
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

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Todo: SettingsScreen,
});

export default createAppContainer(TabNavigator);

