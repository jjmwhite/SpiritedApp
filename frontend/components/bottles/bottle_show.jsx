import React from 'react';
import { Link } from 'react-router-dom';

class BottleShow extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = this.props.bottle
  }

  componentDidMount() {
    const bottleId = this.props.match.params.bottleId;
    this.props.fetchBottle(bottleId);
  }

  componentDidUpdate(prevProps) {
    debugger
    if (this.props.match.params.bottleId != prevProps.match.params.bottleId) {
      this.props.fetchBottle(this.props.match.params.bottleId);
    }
  }
  

  render() {
    const openBottleModal = this.props.openBottleModal;
    debugger
    return(
      <>
        <div className='show-background'>
          <div className='bottle-show-section'>
            <img src={this.state.photoUrl} alt={this.state.name} />
            <div className='bottle-show-details'>
              <Link to={`/regions/${this.state.region_id}`}>{this.state.region}</Link>
              <h1>{this.state.name}</h1>
              <Link to={`/distilleries/${this.state.distillery.id}`}>{this.state.distillery.name}</Link>
              <p>{this.state.description}</p>
              <span>${this.state.price}</span>
              <button className='show-bottle-edit-button' onClick={() => openBottleModal('Edit This Bottle')}>Edit This Bottle</button>
              <div className='rating-details-standin'>
                Rating details component here
              </div>
            </div>
          </div>
          <div className='review-feed-standin'>Reviews TK here...</div>
        </div>
      </>
    )
  }

}

export default BottleShow;