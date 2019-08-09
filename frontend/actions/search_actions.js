import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';

export const receiveSearchResults = (results) => {
  return({
    type: RECEIVE_SEARCH_RESULTS,
    results
  })
}

export const receiveSearchErrors = (errors) => {
  debugger
  return({
    type: RECEIVE_SEARCH_ERRORS,
    errors: errors.responseJSON
  })
}

export const fetchSearchResults = (query) => dispatch => {
  if (query.query === '') return;
  return SearchApiUtil.executeSearch(query)
                      .then( (results) => dispatch(receiveSearchResults(results)))
                      .fail( (errors) => {
                        debugger
                        dispatch(receiveSearchErrors(errors))});
}