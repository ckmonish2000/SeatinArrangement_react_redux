import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const SProtectedRoute = ({ component: Component, ...rest }) => {
    var token=localStorage.getItem("StudentTOKEN");
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

export default SProtectedRoute;