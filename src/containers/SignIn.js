import React, {Component} from 'react';
import {Dimensions,ScrollView,Modal,TouchableOpacity,Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {signIn} from '../actions';
import {tweets} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';

const width=Dimensions.get('window').width;
const newWidth=width/2.7;

class SignIn extends Component {
  state = {
    username:'',
    password:'',
    user:{},
  }
  onChangeText(key,value) {
    this.setState({ [key]:value })
  }

  signIn=()=>{
    //this.props.signIn(this.state.username,this.state.password);
    // console.log(this.props.authenticated);
    var authenticated=true;
    if(authenticated){
      this.props.tweets();
      this.props.navigation.navigate('App');
    }
  }

  forgotPassword=()=>{
    this.props.navigation.navigate('ForgotPassword');
  }

  render() {
    return (
      <View>
        <Header/>
        <ScrollView style={styles.container}>
          <FontAwesome name={'user-circle'} color={'#333333'} size={100} style={styles.userIcon}/>
          <TextInput
            placeholder='Username'
            onChangeText={value => this.onChangeText('username',value)}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            onChangeText={value => this.onChangeText('password',value)}
            secureTextEntry={ true }
            style={styles.input}
          />
          <TouchableOpacity onPress={()=>this.signIn()} style={{padding:10,alignItems:'center',backgroundColor:'#039BE5'}} >
            <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.forgotPassword()} style={{marginVertical:20,padding:10,alignItems:'center',backgroundColor:'#039BE5'}} >
            <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>Forgot Password??</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({signIn,tweets},dispatch);
}

const mapStateToProps=(state)=>{
  return{authenticated:state.SignInReducer};
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    paddingTop:80,
    paddingBottom:100,
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
  }
});
