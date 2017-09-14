import React from 'react';
import { AppRegistry, Component, Image, StyleSheet, Text, View } from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

export default class App extends React.Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style = {styles.container}>
        <Image
          source = {{uri: movie.posters.thumbnail}}
          style = {styles.thumbnail}
        />
        <View style = {styles.rightContainer}>
          <Text>{styles.title}{movie.title}</Text>
          <Text>{styles.year}{movie.year}</Text>
        </View>
      </View>
    );
  }
}
