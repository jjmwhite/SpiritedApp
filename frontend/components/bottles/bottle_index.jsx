import React from 'react';
import BottleCardVert from './bottle_card_vert';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class BottleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBottles();
  }

  render() {    
    const openSessionModal = this.props.openSessionModal;

    let createBottleButton;
    if (this.props.loggedIn) {
      // debugger
      createBottleButton = <button className='index-bottle-create-button'><Link to='/bottles/create'>Create Bottle</Link></button>
    } else {
      // debugger
      createBottleButton = <button className='index-bottle-create-button' onClick={() => openSessionModal('login')}>Create Bottle</button>
    }

    const distilleries = {};
    this.props.distilleries.map( dist => {
      return merge(distilleries, { [dist.id]: dist })
    })

    if ( this.props.bottles === {} ) {
      return(
       <h1 className='loading'>Loading...</h1> 
      )
    } else {
      const allBottles = this.props.bottles.map( bottle => {
        return <BottleCardVert 
          key={bottle.name} 
          bottle={bottle} 
          distillery={distilleries[bottle.distillery_id]}
          fetchBottle={this.props.fetchBottle} />
      })

      return(
        <>
          <div className='bottle-index-container'>
            {allBottles}
          </div>
          {/* <button className='index-bottle-create-button'><Link to='/bottles/create'>Create Bottle</Link></button> */}
          {createBottleButton}
        </>
      )
    }
  }
}

export default BottleIndex;