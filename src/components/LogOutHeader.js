import React, {Component} from 'react';
import {Dimensions,TouchableHighlight,Text, View, StyleSheet,TouchableOpacity,Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const width=Dimensions.get('window').width;
export default class LogOutHeader extends Component{

  render(){
    return(
      <View style={styles.headerContainer}>
          <View style={styles.heading}>
            <FontAwesome name={'home'} style={styles.homeIcon}/>
            <Text style={styles.headingText}>
              Chinmaya Echoes
            </Text>
          </View>
          <TouchableOpacity onPress={this.props.onlogout} style={styles.goBack}>
                <Text style={styles.logOut}>
                  <FontAwesome name={'sign-out'}/>
                   Log Out
                </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:12,
    backgroundColor:'#e6e6e6',
  },
  heading:{
    flexDirection:'row',
  },
  headingText:{
    fontSize:18,
    fontWeight:'800',
    color:'black',
    fontFamily:Platform.OS === 'ios' ? 'cochin' : 'monospace',
    marginLeft:10,
  },
  homeIcon:{
    fontSize:22,
    color:'black',
  },
  logOut:{
    marginVertical:2,
  }
});
