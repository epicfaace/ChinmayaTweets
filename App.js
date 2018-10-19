import React, {Component} from 'react';
import AppStackNavigator from './AppStackNavigator';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './src/reducers';

const createStoreWithMiddleWare=applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component {
  render() {
    return(
      <Provider store={createStoreWithMiddleWare(reducers)}>
        <AppStackNavigator/>
      </Provider>
    );
  }
}
