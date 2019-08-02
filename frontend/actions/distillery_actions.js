import * as DistilleryApiUtil from '../util/distillery_api_util';

export const RECEIVE_ALL_DISTILLERIES = 'RECEIVE_ALL_DISTILLERIES';
export const RECEIVE_DISTILLERY = 'RECEIVE_DISTILLERY';

export const receiveAllDistilleries = (distilleries) => {
  return({
    type: RECEIVE_ALL_DISTILLERIES,
    distilleries
  })
}

export const receiveDistillery = (distillery) => {
  return({
    type: RECEIVE_DISTILLERY,
    distillery
  })
}