import * as RatingApiUtil from '../util/rating_api_util';

export const RECEIVE_RATINGS = 'RECEIVE_RATINGS';
export const RECEIVE_RATING = 'RECEIVE_RATING';
export const REMOVE_RATING = 'REMOVE_RATING';
export const RECEIVE_RATING_ERRORS = 'RECEIVE_RATING_ERRORS';
export const CLEAR_RATING_ERRORS = 'CLEAR_RATING_ERRORS';

export const receiveRatings = payload => {
  return({
    type: RECEIVE_RATINGS,
    payload
  })
}

export const receiveRating = rating => {
  return({
    type: RECEIVE_RATING,
    rating
  })
}

export const destroyRating = rating => {
  return({
    type: REMOVE_RATING,
    ratingId: rating.id
  })
}

export const receiveRatingErrors = errors => {
  return({
    type: RECEIVE_RATING_ERRORS,
    errors: errors.responseJSON
  })
}

export const clearRatingErrors = () => {
  return({
    type: CLEAR_RATING_ERRORS,
  })
}

export const fetchUserRatings = (userId) => dispatch => {
  return RatingApiUtil.fetchUserRatings(userId)
                      .then( (ratings) => dispatch(receiveRatings(ratings)));
}

export const fetchBottleRatings = (bottleId) => dispatch => {
  return RatingApiUtil.fetchBottleRatings(bottleId)
                      .then((ratings) => dispatch(receiveRatings(ratings)));
}

export const createRating = (rating) => dispatch => {
  return RatingApiUtil.createRating(rating)
                      .then( (rating) => dispatch(receiveRating(rating)))
                      .fail( (errors) => dispatch(receiveRatingErrors(errors)));
}

export const updateRating = (rating) => dispatch => {
  return RatingApiUtil.updateRating(rating)
                      .then( (rating) => dispatch(receiveRating(rating)))
                      .fail( (errors) => dispatch(receiveRatingErrors(errors)));
}

export const removeRating = (ratingId, bottleId) => dispatch => {
  return RatingApiUtil.removeRating(ratingId, bottleId)
                      .then( (rating) => dispatch(destroyRating(rating)))
                      .fail( (errors) => dispatch(receiveRatingErrors(errors)));
}