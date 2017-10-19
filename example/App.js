/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { 
  NearbyAPI
} from '../../react-native-nearby-api'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  
  componentDidMount() {
    const nearbyAPI = new NearbyAPI()
    nearbyAPI.onConnected(message => {
      console.log(message)
    })
    nearbyAPI.onFound(message => {
      console.log('Message Found!')
      console.log(message)
    })
    nearbyAPI.onLost(message => {
      console.log('Message Lost!')
      console.log(message)
    })
    nearbyAPI.onDistanceChanged((message, value) => {
      console.log('Distance Changed!')
      console.log(message, value)
    })
    nearbyAPI.publish('Hello World!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
