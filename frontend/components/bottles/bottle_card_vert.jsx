import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  debugger
  const distillery = ownProps.distillery
  const region = ownProps.regions[distillery.region_id]
  return({
    distillery: {
      id: distillery.id,
      name: distillery.name,
      region_id: distillery.region_id,
    },
    region
  })
}

class BottleCardVert extends React.Component {
  
  render() {
    debugger
    const { bottle } = this.props;
    const { distillery } = this.props;
    const { region } = this.props;
    if (_.isEmpty(region)) {
      return <div className='loading-small'>Loading...</div>
    }
    
    let ratingBox;
    if (bottle.avg_rating > 0) {
      ratingBox = 
        <div className='bottle-vert-rating'>
          <div className = 'rating-stars' >
            <span>
              <i className={'fas fa-star ' + (1 > bottle.avg_rating ? 'gray-star' : 'gold-star')}></i>
            </span>
            <span>
              <i className={'fas fa-star ' + (2 > bottle.avg_rating ? 'gray-star' : 'gold-star')}></i>
            </span>
            <span>
              <i className={'fas fa-star ' + (3 > bottle.avg_rating ? 'gray-star' : 'gold-star')}></i>
            </span>
            <span>
              <i className={'fas fa-star ' + (4 > bottle.avg_rating ? 'gray-star' : 'gold-star')}></i>
            </span>
            <span>
              <i className={'fas fa-star ' + (5 > bottle.avg_rating ? 'gray-star' : 'gold-star')} ></i>
            </span>
          </div>
          <p>avg. rating</p>
      </div>
    } else {
      ratingBox =
        <div className='bottle-vert-rating'>
          <p>Be the first to rate this dram</p>
        </div>
    }

    return(
      <section className='bottle-card-vert'>
        {ratingBox}
        <Link to={`/bottles/${bottle.id}`}><img src={bottle.photoUrl} alt={bottle.name}/></Link>
        <div className='bottle-vert-detail'>
          <Link to={`/regions/${region.id}`} className='bottle-subtitle'>{region.name}</Link>
          <Link to={`/bottles/${bottle.id}`}><h4>{bottle.name}</h4></Link>
          <Link to={`/distilleries/${distillery.id}`} className='bottle-subtitle'>{distillery.name}</Link>
          <span>${bottle.price}</span>
        </div>
      </section>
    )
  }

}
export default connect(msp)(BottleCardVert);