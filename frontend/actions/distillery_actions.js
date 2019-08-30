import * as DistilleryApiUtil from '../util/distillery_api_util';

export const RECEIVE_ALL_DISTILLERIES = 'RECEIVE_ALL_DISTILLERIES';
export const RECEIVE_DISTILLERY = 'RECEIVE_DISTILLERY';

export const receiveAllDistilleries = (payload) => {
  return({
    type: RECEIVE_ALL_DISTILLERIES,
    payload
  });
};

export const receiveDistillery = (distillery) => {
  return({
    type: RECEIVE_DISTILLERY,
    distillery
  });
};


export const fetchDistilleries = () => dispatch => {
  return DistilleryApiUtil.fetchDistilleries()
                          .then((distilleries) => dispatch(receiveAllDistilleries(distilleries)));
};

export const fetchDistillery = (id) => dispatch => {
  return DistilleryApiUtil.fetchDistillery(id)
                          .then((distillery) => dispatch(receiveDistillery(distillery)));
};