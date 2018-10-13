import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers'

const createStoreWithMiddleWare=applyMiddleware(ReduxPromise)(createStore);
export default store = createStoreWithMiddleWare(rootReducer);
