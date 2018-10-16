import React, {Component} from 'react';
import {ScrollView,Modal,TouchableOpacity,Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {signIn} from '../actions';
import {tweets} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export default class ForgotPassword extends Component {
  state = {
    username:'',
    password:'',
    user:{},
  }
  onChangeText(key,value) {
    this.setState({ [key]:value })
  }

  forgotPassword=()=>{
    // Auth.forgotPassword(username)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
    //
    // // Collect confirmation code and new password, then
    // Auth.forgotPasswordSubmit(username, code, new_password)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          <FontAwesome name={'user-circle'} color={'#333333'} size={100} style={styles.userIcon}/>
          <TextInput
            placeholder='Username'
            onChangeText={value => this.onChangeText('username',value)}
            style={styles.input}
          />
          <TouchableOpacity onPress={()=>this.show()} style={{marginVertical:20,padding:10,alignItems:'center',backgroundColor:'#039BE5'}} >
            <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>Send Otp</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top:80,
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    margin:10,
    paddingLeft:10,
    borderRadius:10
  },
  userIcon:{
    marginHorizontal:130,
    marginBottom:20,
  }
});
