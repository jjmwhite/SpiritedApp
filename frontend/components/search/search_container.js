import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults } from '../../actions/search_actions';

const msp = state => {
  return({
    results: state.entities.search || ''
  })
}

const mdp = dispatch => {
  return({
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
  })
}

export default connect(msp, mdp)(Search);