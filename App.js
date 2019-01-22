/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions , Text} from 'react-native';

import { AccordionList } from 'accordion-collapse-react-native';
import Collapsible from 'react-native-collapsible';
import { Separator } from 'native-base'; 

import Blink from './src/component/Blink';
import header from './src/component/header';
import Header from './src/component/header';
import InputText from './src/component/InputText';
import CustomButton from './src/component/CustomButton';
import ButtonBasic from './src/component/ButtonBasic';
import Touchables from "./src/component/Touchables";
import IScrolledDownAndWhatHappenedNextShockedMe from './src/component/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './src/component/FlatListBasics';
import SectionListBasics from './src/component/SectionListBasics';
import FetchExample from './src/component/FetchExample';
import FlatListDemo from './src/component/FlatListDemo';


const { WIDTH, HEIGHT } = Dimensions.get('window');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
          {
            title: 'Getting Started',
            body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
          },
          {
            title: 'Components',
            body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
          }
          ],
    };
  }


  _head(item) {
    return (
        //<Separator bordered style={{alignItems:'center'}}>
          <Text>{item.title}</Text>
        // </Separator>
    );
}

_body(item) {
  return (
      <View style={{ padding: 10 }}>
        <Text style={{ textAlign: 'center' }}>{item.body}</Text>
      </View>
  );
}
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // {/* Do every thing inside the <View>  */}
      <View style={[styles.container]}>
      {/* C1- create headerview  for title */}
       <Header title='Album' conditional="true" />
      {/* C2- load image from url and load it here */}
       <Image source={pic} style={{ width: WIDTH, height: 110 }} />
       {/* C3- pass the text from here to Blink class as props  */}

       {/* <AccordionList
            list={this.state.list}
            // eslint-disable-next-line no-underscore-dangle
            header={this._head}
            // eslint-disable-next-line no-underscore-dangle
            body={this._body}
       /> */}
    
       {/* <Blink text="This is blinking app" />
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' /> */}

        {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /> */}

        {/* <InputText/>
        <ButtonBasic/> */}
        {/* <CustomButton/> */}
        {/* <Touchables/> */}
        {/* <IScrolledDownAndWhatHappenedNextShockedMe></IScrolledDownAndWhatHappenedNextShockedMe> */}
        {/* <FlatListBasics/> */}
        {/* <SectionListBasics/> */}
        {/* <FetchExample/> */}
        <FlatListDemo/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: 300
    // marginTop: 80,
    // marginLeft: 40,
    // fontSize: 30, // this will not work with <View>,but it will work with Text
    //justifyContent:'center',
    // alignItems:'center',
  },
  navBar: {
    height: 77,
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: { width: 13, height: 13 },
    shadowRadius: 2,
    shadowColor: 'red',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
});

