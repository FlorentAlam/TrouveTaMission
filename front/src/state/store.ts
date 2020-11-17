import {combineReducers, createStore} from 'redux';
import userReducer from './user/userReducer';

const store = createStore(combineReducers({
    user: userReducer
}));

export default store;