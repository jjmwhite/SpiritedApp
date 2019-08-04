import React from 'react';
import BottleCardVert from './bottle_card_vert';


class BottleIndex extends React.Component {

  constructor(props) {
    super(props);
    debugger
    this.state = {loggedIn: this.props.loggedIn}
  }

  componentDidMount() {
    this.props.fetchBottles();
  }

  render() {    
    const openBottleModal = this.props.openBottleModal;
    const openSessionModal = this.props.openSessionModal;

    let createBottleButton;
    if (this.state.loggedIn) {
      debugger
      createBottleButton = <button className='index-bottle-create-button' onClick={() => openBottleModal('Add a New Bottle')}>Create Bottle</button>
    } else {
      debugger
      createBottleButton = <button className='index-bottle-create-button' onClick={() => openSessionModal('login')}>Create Bottle</button>
    }


    if ( this.props.bottles === {} ) {
      return(
       <div className='loading'>Loading...</div> 
      )
    } else {
      const allBottles = this.props.bottles.map( bottle => {
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
          {createBottleButton}
        </>
      )
    }
  }
}

export default BottleIndex;