import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import SignUpReducer from './SignUpReducer';
import TweetsReducer from './TweetsReducer';

const rootReducer= combineReducers({
  SignInReducer,
  SignUpReducer,
  TweetsReducer,
})

export default rootReducer;
