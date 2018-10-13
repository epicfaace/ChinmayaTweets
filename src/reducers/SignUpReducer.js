import Amplify, { Auth } from 'aws-amplify';
import config from '../Utils/aws-exports';
Amplify.configure(config)

const SignUpReducer=(state=[],action)=>{
  switch (action.type) {
    case 'SIGN_UP':
    console.log(action.username)
    const username=action.username;
    const password=action.password;
    const phone_number=action.phone_number;
    const email=action.email;
    Auth.signUp({
        username,
        password,
        attributes: {
          phone_number,
          email,
        }
      })
      .then(user => {
        //alert(user.message || JSON.stringify(user));
      })
      .catch(err => {
        alert(err.message || JSON.stringify(err));
      })
    return 'signedUp';
    default:
    return state;
  }
}

export default SignUpReducer
