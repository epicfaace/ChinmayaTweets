import React, {Component} from 'react';
import {Dimensions,ScrollView,Modal,TouchableOpacity, Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {signUp} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header'

const width=Dimensions.get('window').width;
const newWidth=width/2.4;
const height=Dimensions.get('window').height;
const newHeight=height/4;
class SignUp extends Component {
  state = {
    username:'',
    password:'',
    email:'',
    phone_number:'',
  }
  onChangeText(key,value) {
    this.setState({ [key]:value })
  }

  signUp=()=>{
    // const {username,password,email,phone_number}=this.state;
    // this.props.signUp(username,password,email,phone_number);
    // alert("Hurray!! You Signed Up");
    this.props.navigation.navigate('Verify');
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
            <View style={styles.passwordInput}>
              <TextInput
                placeholder='Username'
                onChangeText={value => this.onChangeText('username',value)}
                style={styles.input}
              />
              <TouchableOpacity style={styles.starIcon} onPress={this.onUsernamePress}>
                <FontAwesome name={'bullseye'} size={15} color={'#E57373'}/>
              </TouchableOpacity>
            </View>
            <View style={styles.passwordInput}>
              <TextInput
                placeholder='Password'
                onChangeText={value => this.onChangeText('password',value)}
                style={styles.input}
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.starIcon} onPress={this.onPasswordPress}>
                <FontAwesome name={'bullseye'} size={15} color={'#E57373'}/>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder='Phone'
              onChangeText={value => this.onChangeText('phone_number',value)}
              value={this.state.phone_number}
              style={styles.input}
            />
            <TextInput
              placeholder='Email'
              onChangeText={value => this.onChangeText('email',value)}
              style={styles.input}
            />
            <TouchableOpacity onPress={()=>this.signUp()} style={styles.button} >
              <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({signUp},dispatch)
}

const mapStateToProps=(state)=>{
  return{signedUp:state.SignUpReducer};
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

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
    marginTop:Platform.OS === 'ios' ?80:45,
  },
  starIcon:{
    position:'absolute',
    right:40,
    top:25,
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
