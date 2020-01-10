import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "161924"}}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}
