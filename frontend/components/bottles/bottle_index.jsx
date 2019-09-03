import React from 'react';
import BottleCardVert from './bottle_card_vert';
import CreateBottleButton from '../bottles/create_bottle_button';
import { merge } from 'lodash';

class BottleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBottles();
  };

  render() {
    if (this.props.bottles.length === 0 || this.props.distilleries.length === 0 || Object.values(this.props.regions).length < 6) {
      return (
        <div className='loading'>Loading...</div>
      )
    } else {
      const distilleries = {};
      this.props.distilleries.map( dist => {
        return merge(distilleries, { [dist.id]: dist })
      });

      const allBottles = this.props.bottles.map( bottle => {
        return <BottleCardVert 
          key={`${bottle.name}-card-vert`}
          bottle={bottle} 
          distillery={distilleries[bottle.distillery_id]}
          regions={this.props.regions}
          rating={this.props.ratings[bottle.id]}/>
      });

      return(
        <>
          <div className='bottle-index-container'>
            {allBottles}
          </div>
          <CreateBottleButton />
        </>
      )
    };
  };
};

export default BottleIndex;