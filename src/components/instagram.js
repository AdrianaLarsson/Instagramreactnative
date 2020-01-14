import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import H from './header'
import InstagramPhotoSec from './instgram-photo-sec'

import { Header } from 'react-native/Libraries/NewAppScreen';
import { SceneView } from 'react-navigation';
export default class instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView>
      <View>
       <H />
       <InstagramPhotoSec />
       <InstagramPhotoSec />
      </View>
      </ScrollView>
    );
  }
}
