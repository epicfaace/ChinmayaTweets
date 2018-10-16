import React, {Component} from 'react';
import {Dimensions,TouchableOpacity,Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator,createSwitchNavigator} from "react-navigation";
import TweetList from './TweetList';
import TweetDetail from './TweetDetail';
import TweetItem from './TweetItem';
import VerifyOtp from './VerifyOtp';
import ForgotPassword from './ForgotPassword';

const width=Dimensions.get('window').width;
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

const AuthStack = createMaterialBottomTabNavigator({
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
},{
  initialRouteName:'SignIn',
  activeTintColor:'white',
  shifting:true,
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

export default class AppStackNavigator extends Component {

  render(){
    return (
      <View>
        <View style={styles.container}>
        </View>
        <RootStack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width:width,
  },
});
