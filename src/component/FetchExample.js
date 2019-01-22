import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoading: true
      };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, () => {

      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'red',
        height: 0.5,
      }}
    />
  );

  render() {
if (this.state.isLoading) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
} // end of if
return (
    <View style={{ flex: 1, paddingTop: 20, }}>
       <FlatList
        data={this.state.dataSource}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => <Text style={{ fontSize: 24, height: 44, marginLeft: 10 ,marginTop : 10 }}>{item.title}, {item.releaseYear}</Text>}
        keyExtractor={({ id }, index) => id}
      />
      
    </View>
  );
  }// end of render


}// end of class 
