import React from 'react';
import BottleCardVert from './bottle_card_vert';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class BottleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBottles();
  };

  render() {
    const openSessionModal = this.props.openSessionModal;

    let createBottleButton;
    if (this.props.loggedIn) {
      createBottleButton = <Link to='/bottles/create'><button className='index-bottle-create-button'>Create Bottle</button></Link>
    } else {
      createBottleButton = <button className='index-bottle-create-button' onClick={() => openSessionModal('login')}>Create Bottle</button>
    };

    if (this.props.bottles.length === 0 || this.props.distilleries.length === 0 || Object.values(this.props.regions).length < 6) {
      return (
        <div className='loading'>Loading...</div>
      )
    } else {
      const distilleries = {};
      this.props.distilleries.map( dist => {
        return merge(distilleries, { [dist.id]: dist })
      })
      const allBottles = this.props.bottles.map( bottle => {
        return <BottleCardVert 
          key={`${bottle.name}-card-vert`}
          bottle={bottle} 
          distillery={distilleries[bottle.distillery_id]}
          regions={this.props.regions}
          fetchBottle={this.props.fetchBottle} 
          rating={this.props.ratings[bottle.id]}/>
      });

      return(
        <>
          <div className='bottle-index-container'>
            {allBottles}
          </div>
          {createBottleButton}
        </>
      );
    };
  };
};

export default BottleIndex;