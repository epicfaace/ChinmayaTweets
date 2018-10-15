import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import SignUpReducer from './SignUpReducer';
import TweetsReducer from './TweetsReducer';
import SearchReducer from './SearchReducer';

const rootReducer= combineReducers({
  SignInReducer,
  SignUpReducer,
  TweetsReducer,
  SearchReducer,
})

export default rootReducer;
