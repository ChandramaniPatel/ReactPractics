/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable comma-spacing */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-undef */

// 1. import Library for making component

import React from 'react';
import { Text, View,StyleSheet } from 'react-native'; 
import CustomStylesSheet from './CustomStyleSheet';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

 
// 2. Make a component 
const Header = (props) => {
 return (
 <View style={HeaderStylesSheet.container}>
 <Text style={[CustomStylesSheet.tileColor ,CustomStylesSheet.bigValue]}> {props.title} </Text> 
 {/* <Text style={[CustomStylesSheet.red, props.conditional == "true" ? CustomStylesSheet.bigValue : null]}> {props.title} </Text> */}
 <Text style={[CustomStylesSheet.tileColor, CustomStylesSheet.bigblue]}>red, then bigblue</Text>
</View>
 );
};

const HeaderStylesSheet = StyleSheet.create({
    container : {
        paddingTop: 25, // all  child will have 25 padding from top
        height : 80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'grey',
     }
     }); 

// 3. Make componet to available other part of the app 
export default Header;
