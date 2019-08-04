import * as BottleApiUtil from '../util/bottle_api_util';

export const RECEIVE_ALL_BOTTLES = 'RECEIVE_ALL_BOTTLES';
export const RECEIVE_BOTTLE = 'RECEIVE_BOTTLE';
export const REMOVE_BOTTLE = 'REMOVE_BOTTLE';
export const RECEIVE_BOTTLE_ERRORS = 'RECEIVE_BOTTLE_ERRORS';
export const CLEAR_BOTTLE_ERRORS = 'CLEAR_BOTTLE_ERRORS';

export const receiveAllBottles = (payload) => {
  return({
    type: RECEIVE_ALL_BOTTLES,
    payload
  })
}

export const receiveBottle = (payload) => {
  debugger
  return({
    type: RECEIVE_BOTTLE,
    payload
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
                      .fail( (errors) => dispatch(receiveBottleErrors(errors)));;
}

export const createBottle = (formData) => dispatch => {
  debugger
  return BottleApiUtil.createBottle(formData)
                      .then( (bottle) => dispatch(receiveBottle(bottle)))
                      .fail( (errors) => dispatch(receiveBottleErrors(errors)));
}

export const updateBottle = (formData, id) => dispatch => {
  debugger
  return BottleApiUtil.updateBottle(formData, id)
                      .then( (bottle) => dispatch(receiveBottle(bottle)))
                      .fail( (errors) => dispatch(receiveBottleErrors(errors)));
}

export const removeBottle = (id) => dispatch => {
  debugger
  return BottleApiUtil.removeBottle(id)
                      .then( (bottle) => dispatch(destroyBottle(bottle)))
                      .fail( (errors) => dispatch(receiveBottleErrors(errors)));
}