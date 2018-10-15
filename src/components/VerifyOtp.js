import React, {Component} from 'react';
import {Dimensions,ScrollView,Modal,TouchableOpacity, Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {signUp} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const width=Dimensions.get('window').width;
const newWidth=width/2.2;

export default class VerifyOtp extends Component {
  state = {
    username:'',
    code:'',
  }
  onChangeText(key,value) {
    this.setState({ [key]:value })
  }

  verifyOtp=()=>{
    // Auth.confirmSignUp(this.props.username,this.state.confirmCode)
    // .then(res=>{
    //   this.props.screenProps.verified(true);
    //   console.log('signed up',res)
    // })
    // .catch(err=>{
    //   console.log('err:',err)
    //   alert(err.message || JSON.stringify(err));
    // })
    alert("Hurray!! You Signed Up");
    this.props.navigation.navigate('Auth')
  }


  onPasswordPress=()=>{
    var err='Minimum length of password should be 8.It should contain at atleast one Uppercase and one LowerCase.It should also contain atleast one special character and one number';
    alert(JSON.stringify(err));
  }

  onUsernamePress=()=>{
    var err='There should be no space in Username';
    alert(JSON.stringify(err));
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          <FontAwesome name={'user-plus'} color={'#333333'} size={50} style={styles.userIcon}/>
          <TextInput
            placeholder='Enter your OTP here'
            onChangeText={value => this.onChangeText('code',value)}
            style={styles.input}
          />
          <TouchableOpacity onPress={()=>this.verifyOtp()} style={{padding:10,alignItems:'center',backgroundColor:'#039BE5'}} >
            <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>Verify OTP</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop:newHeight,
    top:50,
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    margin:10,
    paddingLeft:10,
    borderRadius:10
  },
  userIcon:{
    left:newWidth,
    marginBottom:20,
  },
  starIcon:{
    position:'absolute',
    right:20,
    top:25,
  }
});
