import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {createStore,combineReducers} from "redux"
import {Reducer} from "./utils/reducer"


const store=createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);