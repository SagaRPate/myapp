/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
 } from 'react-native';

export default class App extends Component<{}> {
       constructor(props) {
           super(props);
           this.state = {text: ''};
       }
      render() {
        return (
          <View style={styles.container}>
            <Image style={styles.image} source={require('./img/logo.png')} />

            <TextInput style={styles.TextInput}
              placeholder="Email id"
              placeholderTextColor="white"
              underlineColorAndroid="#fff"
              onChangeText={(text) => this.setState({text})}
            />

            <TextInput style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff"
              onChangeText={(text) => this.setState({text})}
            />
              <Text style={styles.Text_Button}>
                login
              </Text>
              <Text style={styles.Text_Button}>
                forget Password
              </Text>
          </View>
        );
      }
    }

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000',
      },
      image: {
        marginLeft: 115,
        marginTop: 20,
        width: 150,
        height: 200,
      },
      logoText: {
        textAlign:'center',
        fontSize: 25,
        color: '#3bc4f2',
      },

      TextInput : {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 16,
        color: '#fff',
      },
      Button: {
        width:200,
        marginLeft:100,
        fontSize: 25,
        color: 'green',
        padding:10, 
        height:60,
        borderRadius:4,
        backgroundColor: 'white',
        marginTop:30,
        textAlign:'center',   
      },
      Text_Button: {
        width:300,
        marginLeft:50,
        fontSize: 25,
        color: 'green',
        padding:10, 
        height:60,
        borderRadius:4,
        backgroundColor: 'white',
        marginTop:30,
        textAlign:'center', 
      },
  });
