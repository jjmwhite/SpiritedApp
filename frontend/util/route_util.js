import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { openSessionModal } from '../actions/session_modal_actions';

const msp = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUserId),
    sameUser: (state.session.currentUserId == ownProps.location.pathname.split('/')[1]),
    prevPath: ownProps.location.pathname.split('/edit')[0],
  })
}

const mdp = dispatch => {
  return({
    openSessionModal: type => dispatch(openSessionModal(type))
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
  return (
    <Route exact={exact} path={path} render={
      props => loggedIn ? (<Component {...props} />) : (<Redirect to='/' />)
    } />
  )
}

const UserOnly = ({ component: Component, path, sameUser, exact }) => {
  return(
    <Route exact={exact} path={path} render={
      props => sameUser ? (<Component {...props} />) : (<Redirect to='/' />)
    } />
  )
}

export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp, mdp)(Protected))
export const UserRoute = withRouter(connect(msp)(UserOnly))


//   < Route exact = { exact } path = { path } render = {
//     props => {
//   if (loggedIn)? (<Component {...props} />) : (<Redirect to='/' />)
// }
//     } />


// ORIGINAL LINK:
// const Protected = ({ component: Component, path, loggedIn, exact }) => {
//   return (
//     <Route exact={exact} path={path} render={
//       props => loggedIn ? (<Component {...props} />) : (<Redirect to='/' />)
//     } />
//   )
// }

// const Protected = ({ component: Component, path, loggedIn, exact, openSessionModal, history, prevPath }) => {
//   if (loggedIn) {
//     return (< Route exact={exact} path={path} render={props => <Component {...props} />} />)
//   } else {
//     < Route exact={exact} path={path} render={() => openSessionModal('login')} />
//   }
// }