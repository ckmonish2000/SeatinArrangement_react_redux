import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const TProtectedRoute = ({ component: Component, ...rest }) => {
    var token=localStorage.getItem("TeacherToken");
if(token){
  return (
    <Route {...rest} render={
      props => <Component {...rest} {...props} />
    } />
  )}
  else{
      return <Redirect to="/TeacherLogin"/>
  }
}

export default TProtectedRoute;