import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {createStore,combineReducers} from "redux"
import {SignupReducer,LoginRedcerStudents} from "./utils/reducer"
import {BrowserRouter} from "react-router-dom"


const allReducer=combineReducers({
  SignupReducer,
  LoginRedcerStudents

})

const store=createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);