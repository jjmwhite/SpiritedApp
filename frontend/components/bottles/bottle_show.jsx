import React from 'react';
import { Link } from 'react-router-dom';
import BottleShowRatingContainer from '../ratings/bottle_show_rating_container';
import NewRatingContainer from '../ratings/new_rating_container';

class BottleShow extends React.Component {

  componentDidMount() {
    const bottleId = this.props.match.params.bottleId;
    this.props.fetchBottle(bottleId);
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.bottleId != prevProps.match.params.bottleId) {
      this.props.fetchBottle(this.props.match.params.bottleId);
      window.scrollTo(0, 0);
    };
  };

  render() {
    const { bottle } = this.props;
    const { distillery } = this.props;
    const { region } = this.props;
    const { users } = this.props;

    if (!bottle) {
      return (
        <div className='loading'>Loading...</div>
      );
    };

    let allRatings;
    if (this.props.ratings.length === 0) {
      allRatings = <section className='be-the-first'>Be the first to rate this scotch.</section>
    } else {
      allRatings = this.props.ratings.map( rating => {
        return <BottleShowRatingContainer 
          key={`rating-id-${rating.id}`} 
          rating={rating} 
          users={users} />
      });
    };

    let editButton;
    if (this.props.currentUserId === bottle.user_id || this.props.currentUserId === 1) {
      editButton = <button className='show-bottle-edit-button'><Link to={`/bottles/${bottle.id}/edit`}>Edit This Bottle</Link></button>
    } else {
      editButton = <></>
    };

    return (
      <>
        <div className='show-background'>
          <main className='show-body'>
            <div className='bottle-show-section'>
              <img src={bottle.photoUrl} alt={bottle.name} />
              <div className='bottle-show-details'>
                <Link to={`/regions/${region.id}`}>{region.name}</Link>
                <h1>{bottle.name}</h1>
                <Link to={`/distilleries/${distillery.id}`}>{distillery.name}</Link>
                <p>{bottle.description}</p>
                <span>${bottle.price}</span>
                {editButton}
              </div>
            </div>
            <div className='rating-show-section'>
              <h1>Community Reviews</h1>
              <div className='rating-show-background'>
                {allRatings}
              </div>
            </div>
            <div className='rating-form-section'>
              <h1>Rate This Scotch</h1>
              <div className='rating-show-background'>
                <NewRatingContainer bottleId={bottle.id}/>
              </div>  
            </div>
          </main>
        </div>
      </>
    );
  };
};

export default BottleShow;