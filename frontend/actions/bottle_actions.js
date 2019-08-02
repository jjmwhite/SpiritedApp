import * as BottleApiUtil from '../util/bottle_api_util';

export const RECEIVE_ALL_BOTTLES = 'RECEIVE_ALL_BOTTLES';
export const RECEIVE_BOTTLE = 'RECEIVE_BOTTLE';
export const REMOVE_BOTTLE = 'REMOVE_BOTTLE';
export const RECEIVE_BOTTLE_ERRORS = 'RECEIVE_BOTTLE_ERRORS';
export const CLEAR_BOTTLE_ERRORS = 'CLEAR_BOTTLE_ERRORS';

export const receiveAllBottles = (payload) => {
  debugger
  return({
    type: RECEIVE_ALL_BOTTLES,
    payload
  })
}

export const receiveBottle = (bottle) => {
  return({
    type: RECEIVE_BOTTLE,
    bottle
  })
}

export const destroyBottle = (bottle) => {
  return({
    type: REMOVE_BOTTLE,
    bottleId: bottle.id
  })
}

export const receiveBottleErrors = (errors) => {
  return({
    type: RECEIVE_BOTTLE_ERRORS,
    errors: errors.responseJSON
  })
}

export const clearBottleErrors = () => {
  return({
    type: CLEAR_BOTTLE_ERRORS,
  })
}

export const fetchBottles = () => dispatch => {
  return BottleApiUtil.fetchBottles()
                      .then( (bottles) => dispatch(receiveAllBottles(bottles)));
}

export const fetchBottle = (id) => dispatch => {
  return BottleApiUtil.fetchBottle(id)
                      .then( (bottle) => dispatch(receiveBottle(bottle)))
                      .fail((errors) => dispatch(receiveBottleErrors(errors)));;
}

export const createBottle = (bottle) => dispatch => {
  return BottleApiUtil.createBottle(bottle)
                      .then( (bottle) => dispatch(receiveBottle(bottle)))
                      .fail( (errors) => dispatch(receiveBottleErrors(errors)));
}

export const updateBottle = (bottle) => dispatch => {
  return BottleApiUtil.updateBottle(bottle)
                      .then( (bottle) => dispatch(receiveBottle(bottle)))
                      .fail( (errors) => dispatch(receiveBottleErrors(errors)));
}

export const removeBottle = (bottle) => dispatch => {
  return BottleApiUtil.removeBottle(bottle)
                      .then( (bottle) => dispatch(destroy(bottle)))
                      .fail( (errors) => dispatch(receiveBottleErrors(errors)));
}