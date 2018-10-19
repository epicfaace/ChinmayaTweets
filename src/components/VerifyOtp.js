import React, {Component} from 'react';
import {Dimensions,ScrollView,Modal,TouchableOpacity, Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {signUp} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './Header';
import LogOutHeader from './LogOutHeader';

const width=Dimensions.get('window').width;
const newWidth=width/2.4;

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
      <View style={styles.container}>
        <Header/>
        <ScrollView>
          <FontAwesome name={'user-plus'} color={'#333333'} size={50} style={styles.userIcon}/>
          <TextInput
            placeholder='Enter your OTP here'
            onChangeText={value => this.onChangeText('code',value)}
            style={styles.input}
          />
          <TouchableOpacity onPress={()=>this.verifyOtp()} style={styles.button} >
            <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>Verify OTP</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:Platform.OS === 'ios' ?20:0,
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical:10,
    paddingLeft:10,
    borderRadius:10,
    borderColor:'#d9d9d9',
    borderWidth:1,
    marginHorizontal:30,
  },
  userIcon:{
    marginHorizontal:newWidth,
    marginBottom:20,
    marginTop:Platform.OS === 'ios' ?80:35,
  },
  button:{
    padding:10,
    alignItems:'center',
    backgroundColor:'#1a8cff',
    borderRadius:6,
    marginHorizontal:100,
    marginVertical:10,
  }
});
