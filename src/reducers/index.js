import {combineReducers} from 'redux';
import addReducer from './addReducer.js';

const rootReducers = combineReducers({
    add: addReducer
});

export default rootReducers;