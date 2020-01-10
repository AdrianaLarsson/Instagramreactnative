import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Header from './src/components/header'
import PhotoSection from './src/components/photo-section'
import Dummy from './src/components/dummy'
import PhotoFeed from './src/components/photo-feed'
import Middle from './src/components/middle'
//import Screen from './src/components/screen'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
     
<ScrollView>
      <Header text="Adrianas Dummy app" />

      {/* <PhotoFeed /> */}
      {/* <PhotoSection />
      <PhotoSection /> */}
      {/* <Dummy /> */}
      {/* <Middle /> */}
 
        <PhotoSection />
       <PhotoSection /> 
       <PhotoSection />   
       {/* <PhotoFeed /> */}
      </ScrollView>
    </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);


// import React from 'react';
// import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
// import { TabNavigator } from 'react-navigation'
// import Header from './src/components/header'
// import PhotoSection from './src/components/photo-section'
// import Dummy from './src/components/dummy'
// import PhotoFeed from './src/components/photo-feed'
// import Middle from './src/components/middle'
//import Screen from './src/components/screen'



// export default function App () {
 
//   return (
    
  
//     <View>
// <ScrollView>
//       <Header text="Adrianas Dummy app" />

//       {/* <PhotoFeed /> */}
//       {/* <PhotoSection />
//       <PhotoSection /> */}
//       {/* <Dummy /> */}
//       {/* <Middle /> */}
 
//         <PhotoSection />
//        <PhotoSection /> 
//        <PhotoSection />   
//        {/* <PhotoFeed /> */}
//       </ScrollView>
//     </View>
   


//   );
// }

// export default TabNavigator ({
//   Home:Home,
//   Settings:Settings
// })