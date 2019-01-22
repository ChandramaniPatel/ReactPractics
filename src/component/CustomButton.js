import React, { Component } from 'react'
import { View, Button , Alert } from 'react-native';

export default class CustomButton extends Component {
  render() {
    return (
      <View>
       <Button
           onPress={() => {
                        Alert.alert('You tapped the button!');
                     }}
           title="Press Me"
       />
       </View>
    )
  }
}
