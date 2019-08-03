import * as RegionApiUtil from '../util/region_api_util';

export const RECEIVE_ALL_REGIONS = 'RECEIVE_ALL_REGIONS';
export const RECEIVE_REGION = 'RECEIVE_REGION';

export const receiveAllRegions = (regions) => {
  return({
    type: RECEIVE_ALL_REGIONS,
    regions
  })
}

export const receiveRegion = (region) => {
  return({
    type: RECEIVE_REGION,
    region
  })
}