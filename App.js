/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default class App extends Component<Props> {
  render() {
    return (
      <View style = {styles.appContainer}>
        <Header headerText = {'Welcome'}/>
        <AlbumList />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    backgroundColor: '#FFFF',
    height: 100,
  }
});
