/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome To My App
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: 'red',
    borderRadius: 4,
    borderWidth: 2,
    padding: 8,
    borderColor: 'blue',
  },
  });
