import * as RatingApiUtil from '../util/rating_api_util';

export const RECEIVE_RATINGS = 'RECEIVE_RATINGS';

export const receiveRatings = payload => {
  return({
    type: RECEIVE_RATINGS,
    payload
  })
}

// export const fetchUserRatings = (userId) => dispatch => {
//   return RatingApiUtil.fetchUserRatings(userId)
//                       .then( (ratings))
// }