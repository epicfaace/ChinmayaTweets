import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppStackNavigator from './components/AppStackNavigator';

export default class TweetApp extends Component{
  render() {
    return (
      <View style={styles.appContainer}>
        <AppStackNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer:{
    marginTop:Platform.OS === 'ios' ? 20 : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
