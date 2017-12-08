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
  TextInput,
  TouchableOpacity,
  Switch,
  Linking,
 } from 'react-native';


export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = { showPassword: true, };
  }


  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }

      render() {
        return (

          <View style={styles.container}>
            <Image style={styles.image} source={require('./img/logo.png')} />
              <View style={{ flexDirection: 'row', borderWidth: 1, marginLeft: 30, width: 295, borderBottomColor: '#fff', }}>
                <TextInput  style={styles.TextInputEmail}
                  placeholder="Email id..."
                  placeholderTextColor="#fff"
                  underlineColorAndroid="#000"
                  onChangeText={(text) => this.setState({text})}
                />
              </View>
                <View style={{ flexDirection: 'row', borderWidth: 1, marginLeft: 30, width: 295, borderBottomColor: '#fff', }}>
                    <TextInput style={styles.Password}
                        placeholder="Password..."
                        placeholderTextColor="#fff"
                        underlineColorAndroid="#000"
                        style={styles.TextInputPassword}
                        secureTextEntry={true}
                        secureTextEntry={this.state.showPassword}
                        onChangeText={(password) => this.setState({ password })}
                      />
                      <Switch style={styles.PasswordSwitch}
                        onValueChange={this.toggleSwitch}
                        value={!this.state.showPassword}
                      />
                </View>
                <TouchableOpacity>
                    <Text style={styles.button}
                        onPress={() => Linking.openURL('https://www.google.co.in')}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                     <Text style={styles.buttonpassword}>
                        Forget Password
                     </Text>
                </TouchableOpacity>

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
      TextInputEmail: {
        width: 215,
        marginTop: 30,
        marginRight: 30,
        fontSize: 18,
        color: '#fff',
      },
      TextInputPassword: {
        width: 215,
        marginTop: 30,
        marginRight: 30,
        fontSize: 18,
        color: '#fff',
      },
     Password :{
         justifyContent: 'center',
         flex:1,
         color: '#fff',
     },
      button: {
        color: '#1d3d89',
        fontSize: 25,
        marginLeft: 100,
        marginTop: 30,
        borderRadius: 8,
        paddingTop: 8,
        paddingLeft: 45,
        width: 150,
        height: 50,
        backgroundColor: '#3bc3f2',
        marginBottom: 10,
      },
      buttonpassword: {
        color: 'red',
        backgroundColor: '#3bc3f2',
        fontSize: 25,
        width: 235,
        marginLeft: 60,
        marginTop: 10,
        paddingLeft: 25,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 8,
      },
      PasswordSwitch: {
        height: 40,
        width: 50,
        marginTop: 40,
      },
  });




