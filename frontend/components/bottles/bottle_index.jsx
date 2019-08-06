import React from 'react';
import BottleCardVert from './bottle_card_vert';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class BottleIndex extends React.Component {

  componentDidMount() {
    // debugger
    this.props.fetchBottles();
  }

  render() {    
    const openSessionModal = this.props.openSessionModal;

    let createBottleButton;
    if (this.props.loggedIn) {
      createBottleButton = <button className='index-bottle-create-button'><Link to='/bottles/create'>Create Bottle</Link></button>
    } else {
      createBottleButton = <button className='index-bottle-create-button' onClick={() => openSessionModal('login')}>Create Bottle</button>
    }
    
    

    if (this.props.bottles === {}) {
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
          fetchBottle={this.props.fetchBottle} />
      })

      return(
        <>
          <div className='bottle-index-container'>
            {allBottles}
          </div>
          {createBottleButton}
        </>
      )
    }
  }
}

export default BottleIndex;