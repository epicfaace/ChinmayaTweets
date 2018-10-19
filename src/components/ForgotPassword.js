import React, {Component} from 'react';
import {ScrollView,Modal,TouchableOpacity,Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Amplify, { Auth } from 'aws-amplify';
import config from '../Utils/aws-exports';
import Header from '../components/Header';
Amplify.configure(config)

export default class ForgotPassword extends Component {
  state = {
    username:'',
    password:'',
    user:{},
  }
  onChangeText(key,value) {
    this.setState({[key]:value})
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('Auth');
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  forgotPassword=()=>{
    // Auth.forgotPassword(this.state.username)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
    // // Collect confirmation code and new password, then
    // Auth.forgotPasswordSubmit(username, code, new_password)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ScrollView>
          <FontAwesome name={'user-circle'} color={'#333333'} size={100} style={styles.userIcon}/>
          <View style={{marginHorizontal:20}}>
          <TextInput
            placeholder='Username'
            onChangeText={value => this.onChangeText('username',value)}
            style={styles.input}
          />
          <TouchableOpacity onPress={()=>this.show()} style={{marginVertical:10,padding:10,alignItems:'center',backgroundColor:'#1a8cff',borderRadius:5}} >
            <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>Next</Text>
          </TouchableOpacity>
          </View>
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
  },
  userIcon:{
    marginHorizontal:130,
    marginBottom:20,
    marginTop:Platform.OS === 'ios' ?80:45,
  }
});
