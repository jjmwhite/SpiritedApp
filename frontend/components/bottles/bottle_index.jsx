import React from 'react';
import BottleCardVert from './bottle_card_vert';

class BottleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBottles()
  }

  render() {    
    const openBottleModal = this.props.openBottleModal;
    if ( this.props.bottles === {} ) {
      return(
       <div className='loading'>Loading...</div> 
      )
    } else {
      const allBottles = this.props.bottles.map( bottle => {
        debugger
        return <BottleCardVert 
          key={bottle.name} 
          bottle={bottle} 
          fetchBottle={this.props.fetchBottle} />
      })

      return(
        <>
          <div className='bottle-index-container'>
            {allBottles}
          </div>
          <button className='index-bottle-create-button' onClick={() => openBottleModal('Add a New Bottle')}>Create Bottle</button>
        </>
      )
    }
  }
}

export default BottleIndex;