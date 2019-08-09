import { connect } from 'react-redux';
import SearchResult from './search_result';

const msp = (state) => {
  const results = Object.values(state.ui.search)
  return({
    results,
    errors: state.errors.search 
  })
}

export default connect(msp)(SearchResult);