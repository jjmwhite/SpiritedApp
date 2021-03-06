import React from 'react';
import BottleCardHorz from '../bottles/bottle_card_horz';

class UserProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUserProfile(this.props.currentUser.id);
  };

  render() {
    const { currentUser } = this.props;

    if (_.isEmpty(this.props.distilleries) || this.props.distilleries === undefined) {
      return (
        <div className='loading'>Loading...</div>
      )
    };

    const { bottles } = this.props;
    const userBottles = [] ;
    Object.values(this.props.bottles).forEach(bottle => {
      if (bottle.user_id === currentUser.id) {
        userBottles.push(
          <BottleCardHorz
            key={`${bottle.name}-card-horz-owned`}
            bottle={bottle}
            distillery={this.props.distilleries[bottle.distillery_id]}
            regions={this.props.regions}
            ratings={this.props.ratings}
          />)
      };
    });

    const ratedBottles = [];
    Object.values(this.props.ratings).map(rating => {
      if (bottles[rating.bottle_id]) {
        ratedBottles.push(bottles[rating.bottle_id])
      };
    });
    
    const allRatings = ratedBottles.map( bottle => {
      return <BottleCardHorz
        key={`${bottle.name}-card-horz-rated`}
        bottle={bottle}
        distillery={this.props.distilleries[bottle.distillery_id]}
        regions={this.props.regions}
        ratings={this.props.ratings}
      />
    });
    
    return (
      <div className='user-profile'>
        <aside className='user-profile-detail'>
          <img src={userProfileImg} />
          <h2>{currentUser.first_name}</h2>
          <h5>Bottles Rated:</h5>
          <h3>{allRatings.length}</h3>
          <h5>Bottles Added:</h5>
          <h3>{userBottles.length}</h3>
        </aside>
        <main className='user-content'>
          <div className='profile-ratings'>
            <h2>My Ratings:</h2>
            {allRatings}
          </div>
          <div className='profile-bottles'>
            <h2>My Added Bottles:</h2>
            {userBottles}
          </div>
        </main>
      </div>
    )
  };
};

export default UserProfile;