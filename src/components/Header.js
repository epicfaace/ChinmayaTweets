import React, {Component} from 'react';
import {Dimensions,TouchableHighlight,Text, View, StyleSheet,TouchableOpacity,Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const width=Dimensions.get('window').width;
export default class Header extends Component{

  render(){  
    return(
      <View>
        <TouchableOpacity onPress={this.props.onClick} style={styles.heading}>
          <FontAwesome name={'home'} style={styles.homeIcon}/>
          <Text style={styles.headingText}>
            CCMT TWEETS
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading:{
    padding:12,
    backgroundColor:'#e6e6e6',
    justifyContent:'center',
    flexDirection:'row',
    width:width,
  },
  homeIcon:{
    fontSize:25,
    color:'#3366cc',
    marginRight:10,
  },
  headingText:{
    fontSize:20,
    fontWeight:'800',
    color:'#8c8c8c',
  }
});
