import React, {Component} from 'react';
import {Dimensions,ScrollView,Modal,TouchableOpacity, Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {signUp} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const width=Dimensions.get('window').width;
const newWidth=width/2.2;
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
      <View>
        <ScrollView style={styles.container}>
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
          <TouchableOpacity onPress={()=>this.signUp()} style={{padding:10,alignItems:'center',backgroundColor:'#039BE5'}} >
            <Text style={{fontWeight:'900',fontSize:16,color:'white'}}>Sign Up</Text>
          </TouchableOpacity>
          {/*<Button title='Sign Up' onPress={()=>this.signUp()} />*/}
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
