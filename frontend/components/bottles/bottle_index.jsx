import React from 'react';
import BottleCardVert from './bottle_card_vert';

class BottleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBottles()
  }

  render() {    
    // debugger
    if ( this.props.bottles === {} ) {
      return(
       <div className='loading'>Loading...</div> 
      )
    } else {
      // debugger
      const allBottles = this.props.bottles.map( bottle => {
        return <BottleCardVert bottle={bottle} fetchBottle={this.props.fetchBottle} />
      })

      return(
        <div className='bottle-index-container'>
          {allBottles}
        </div>
      )
    }
  }
}

export default BottleIndex;