import { connect } from 'react-redux';
import { fetchDistillery } from '../../actions/distillery_actions';
import DistilleryShow from './distillery_show';

const msp = (state, ownProps) => {
  const distilleryId = ownProps.match.params.distId;
  const distillery = state.entities.distilleries[distilleryId] || null;
  const regions = state.entities.regions;
  const bottles = [];
  Object.values(state.entities.bottles).map( bottle => {
    if (bottle.distillery_id == distilleryId) bottles.push(bottle)
  });

  return({
    distilleryId,
    distillery,
    bottles,
    regions,
  });
};

const mdp = dispatch => {
  return({
    fetchDistillery: (id) => dispatch(fetchDistillery(id))
  });
};

export default connect(msp, mdp)(DistilleryShow);