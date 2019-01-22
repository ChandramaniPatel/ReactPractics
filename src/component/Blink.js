
import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Image
} from 'react-native';

export default class Blink extends Component {
 
  //Receiving props from Calling class
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
// create  your style as a seperate class or direclty pass with Text' styles
    return (
      <View style ={{backgroundColor:'green'}}>
      <Text style={{ fontSize: 30,color:'#33FFAA' }}> {this.props.text} </Text>
      </View>
    );
  }
}

