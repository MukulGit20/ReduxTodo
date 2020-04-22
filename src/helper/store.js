import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [];

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;