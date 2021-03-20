import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {createStore,combineReducers} from "redux"
import {Reducer} from "./utils/reducer"
import {BrowserRouter} from "react-router-dom"

const store=createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);