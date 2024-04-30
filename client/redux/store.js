import { createStore, applyMiddleware, compose } from 'redux';
import { reduceruser } from './reducer/reducer';
import {thunk} from "redux-thunk"
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reduceruser, /* preloadedState, */ composeEnhancers(
 
    applyMiddleware(thunk)
  ));