import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

export const receiveUserProfile = payload => {
  debugger
  return ({
    type: RECEIVE_USER_PROFILE,
    payload
  })
}

export const fetchUserProfile = id => dispatch => {
  debugger
  return UserApiUtil.fetchUserProfile(id)
                    .then( (profile) => dispatch(receiveUserProfile(profile)));
}