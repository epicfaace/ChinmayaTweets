import Amplify, { Auth } from 'aws-amplify';
import config from '../Utils/aws-exports';
Amplify.configure(config)
const SignInReducer=(state=[],action)=>{
  let verified='verified';
  switch (action.type) {
    case 'SIGN_IN':
    const username=action.username;
    const password=action.password;
    Auth.signIn(username,password)
    .then((user) => {
      verified='verified';
      alert(user.message || JSON.stringify(user));
    },this)
    .catch(err => {
      alert(err.message || JSON.stringify(err));
    })
    console.log('new verified'+this.verified)
    return verified;
    default:
    return state;
  }
}

export default SignInReducer
