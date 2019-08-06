import React from 'react';
import { Link } from 'react-router-dom';
import BottleShowRating from "../ratings/bottle_show_rating";

class BottleShow extends React.Component {

  componentDidMount() {
    const bottleId = this.props.match.params.bottleId;
    this.props.fetchBottle(bottleId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.bottleId != prevProps.match.params.bottleId) {
      this.props.fetchBottle(this.props.match.params.bottleId);
    }
  }

  render() {
    // const openBottleModal = this.props.openBottleModal;
    const { bottle } = this.props;
    const { distillery } = this.props;
    const { region } = this.props

    debugger
    if (!bottle) {
      return (
        <div>Loading...</div>
      )
    } 

    const allRatings = this.props.ratings.map( rating => {
      // return <BottleShowRating rating={rating} />
    })


    return (
      <>
        <div className='show-background'>
          <div className='bottle-show-section'>
            <img src={bottle.photoUrl} alt={bottle.name} />
            <div className='bottle-show-details'>
              <Link to={`/regions/${region.id}`}>{region.name}</Link>
              <h1>{bottle.name}</h1>
              <Link to={`/distilleries/${distillery.id}`}>{distillery.name}</Link>
              <p>{bottle.description}</p>
              <span>${bottle.price}</span>
              {/* <button className='show-bottle-edit-button' onClick={() => openBottleModal('Edit This Bottle')}>Edit This Bottle</button> */}
              <button className='show-bottle-edit-button'><Link to={`/bottles/${bottle.id}/edit`}>Edit This Bottle</Link></button>

            </div>
            <div className='rating-details-standin'>
              {allRatings}
            </div>
          </div>
          {/* <div className='review-feed-standin'>Reviews TK here...</div> */}
        </div>
      </>
    )
  }
}

export default BottleShow;