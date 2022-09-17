import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as listingListReducer  from './reducers/listingReducers';
import {modalReducer } from './reducers/modalReducer'

const reducer = combineReducers({listingList:listingListReducer, modal:modalReducer});
const initalState = {};
const middleware = [thunk];
const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;