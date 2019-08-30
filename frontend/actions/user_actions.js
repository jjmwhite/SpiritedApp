import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

export const receiveUserProfile = payload => {
  return ({
    type: RECEIVE_USER_PROFILE,
    payload
  });
};

export const fetchUserProfile = id => dispatch => {
  return UserApiUtil.fetchUserProfile(id)
                    .then( (payload) => dispatch(receiveUserProfile(payload)));
};