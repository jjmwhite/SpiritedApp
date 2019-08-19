import { connect } from 'react-redux';
import { openSessionModal } from '../../actions/session_modal_actions';
import SearchResult from './search_result';

const msp = (state) => {
  const results = Object.values(state.ui.search)
  return({
    results,
    noResult: state.errors.search,
    currentUser: Boolean(state.session.currentUserId)
  })
}

const mdp = dispatch => {
  return({
    openSessionModal: (type) => dispatch(openSessionModal(type))
  })
}

export default connect(msp, mdp)(SearchResult);