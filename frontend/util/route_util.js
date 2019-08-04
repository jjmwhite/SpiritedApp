import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
  return({
    logged_in: Boolean(state.session.currentUser)
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
  return(
    <Route exact={exact} path={path} render={
      props => loggedIn ? (<Component {...props} />) : (<Redirect to='/login' />)
    } />
  )
}

export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp)(Protected))