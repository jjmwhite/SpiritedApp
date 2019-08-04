import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
  return({
    loggedIn: Boolean(state.session.currentUserId)
  })
}

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return(
    <Route exact={exact} path={path} render={
      props => !loggedIn ? (<Component {...props} />) : (<Redirect to='/'/>)
    } />
  )
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  debugger
  return(
    <Route exact={exact} path={path} render={
      props => loggedIn ? (<Component {...props} />) : (<Redirect to='/' />)
    } />
  )
}

export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp)(Protected))