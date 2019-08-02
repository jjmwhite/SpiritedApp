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
        return <BottleCardVert key={bottle.id} bottle={bottle} fetchBottle={this.props.fetchBottle} />
      })

      return(
        <div className='bottle-index-container'>
          {allBottles}
          <button onClick={() => openBottleModal('createBottle')}>Create Bottle</button>
        </div>
      )
    }
  }
}

export default BottleIndex;