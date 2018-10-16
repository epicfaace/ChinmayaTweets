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
                <Text style={styles.backLink}>
                  <FontAwesome name={'sign-out'} style={styles.chevron}/>
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
    color:'#8c8c8c',
    fontFamily:Platform.OS === 'ios' ? 'cochin' : 'monospace',
    marginLeft:10,
  },
  homeIcon:{
    fontSize:22,
    color:'black',
  },
});
