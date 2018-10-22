import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import SignUpReducer from './SignUpReducer';
import TweetsReducer from './TweetsReducer';
import SearchReducer from './SearchReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';

const rootReducer= combineReducers({
  SignInReducer,
  SignUpReducer,
  TweetsReducer,
  SearchReducer,
  ForgotPasswordReducer,
})

export default rootReducer;
