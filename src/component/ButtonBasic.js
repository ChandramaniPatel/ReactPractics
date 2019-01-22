/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
import { Alert, StyleSheet, View, Button, Text } from 'react-native';
import React, { Component } from 'react';

export default class ButtonBasic extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            testBackgroundColor: false,
            testColor: 'blue'
      };
    }
    _onPressButton(item) {
        if (item == 'FirstButton') {
            this.setState({ testBackgroundColor: true });
        }       
         else {
         alert("Not first button")
        }
  }
  _onPressAnotherButton() {
    Alert.alert('You tapped the another button!');
}
  render() {
      return (
        <View style={[styles.container, this.state.testBackgroundColor ? { backgroundColor: 'red' } : { backgroundColor: this.state.testColor }]}>
         {/* <View style={{ backgroundColor: this.state.testColor }}> */}
         <View style={styles.buttonContainer} />
         <Button
            onPress={() => this._onPressButton()}
            title="Press Me"
         />

<View style={styles.buttonContainer}>
<Button
  onPress={() => this._onPressButton()}
  title="Press Me"
  color="#841584"
/>
</View>
<View style={styles.alternativeLayoutButtonContainer}>
          <Button
        
            onPress={() => this._onPressButton('FirstButton')}
            title="This looks great!"
          />
           <Button
            onPress={() => this._onPressAnotherButton()}
            title="OK!"
            color="#841584"
           />
          <Text>{'Hello'}</Text>
        </View>
      </View>
      );
  }

}// end of class

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#33FFCC'
},
buttonContainer: {
    margin: 20,
},
alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
}
    });
