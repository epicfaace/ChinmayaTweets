import React, {Component} from 'react';
import {Button,Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignIn from './src/containers/SignIn';
import SignUp from './src/containers/SignUp';
import TweetList from './src/components/TweetList';
import TweetDetail from './src/components/TweetDetail';
import TweetItem from './src/components/TweetItem';
import VerifyOtp from './src/components/VerifyOtp';
import ForgotPassword from './src/components/ForgotPassword';

const AuthStack = createMaterialBottomTabNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions:{
        tabBarLabel:'Sign In',
        tabBarIcon:({tintColor})=>(
           <FontAwesome name={'sign-in'} color={'white'} size={22}/>
        )
      }
    },
    Register: {
      screen: SignUp,
      navigationOptions:{
        tabBarLabel:'Register',
        tabBarIcon:({tintColor})=>(
           <FontAwesome name={'user-plus'} color={'white'} size={22}/>
        )
      }
    },
  },
  {
    initialRouteName:'SignIn',
    activeTintColor:'white',
    shifting:true,
  }
);
const AppStack = createStackNavigator({
    TweetList: { screen: TweetList },
    TweetDetail: { screen: TweetDetail },
    TweetItem: { screen: TweetItem },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
const VerifyStack = createStackNavigator({
    VerifyOtp: { screen: VerifyOtp },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const ForgotPasswordStack = createStackNavigator({
    ForgotPassword: { screen: ForgotPassword },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
const RootStack= createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    Verify:VerifyStack,
    ForgotPassword:ForgotPasswordStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default class AppStackNavigator extends React.Component {
  render() {
    return <RootStack/>;
  }
}
