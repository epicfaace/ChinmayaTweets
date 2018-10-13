import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TweetApp from './src/TweetApp';
import store from './src/store'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './src/reducers'

const createStoreWithMiddleWare=applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Provider store={createStoreWithMiddleWare(reducers)}>
          <TweetApp/>
        </Provider>
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
