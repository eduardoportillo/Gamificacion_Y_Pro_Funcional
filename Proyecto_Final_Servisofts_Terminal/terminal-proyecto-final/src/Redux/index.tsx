import React from 'react';
import { getReducer, setStore } from '../Model';
import Reducer from './Reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider as ProviderRedux } from 'react-redux';
import reduxThunk from 'redux-thunk';


export const store = createStore(
    combineReducers(getReducer()),
    {},
    applyMiddleware(reduxThunk),
);

setStore(store);

const Redux = (props) => {
    return (<ProviderRedux store={store} >
        {props.children}
    </ProviderRedux>)
}
export default Redux;