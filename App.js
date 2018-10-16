import React, {Component} from 'react';
import {Dimensions,Platform, StyleSheet, Text, View} from 'react-native';
import TweetApp from './src/TweetApp';
import store from './src/store'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './src/reducers'

const createStoreWithMiddleWare=applyMiddleware(ReduxPromise)(createStore);

const width=Dimensions.get('window').width;

export default class App extends Component{

  render() {
    return (
      <View style={styles.container}>
        <Provider store={createStoreWithMiddleWare(reducers)} style={styles.container}>
          <TweetApp/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
});
