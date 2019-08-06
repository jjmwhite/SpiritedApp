import React from 'react';
import BottleCardHorz from '../bottles/bottle_card_horz';
import { merge } from 'lodash';

class UserProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUserProfile(this.props.currentUser.id)
  }

  render() {
    const { currentUser } = this.props;

    if (this.props.distilleries.length === 0) {
      return (
        <div className='loading'>Loading...</div>
      )
    } 

    const distilleries = {};
    this.props.distilleries.map(dist => {
      return merge(distilleries, { [dist.id]: dist })
    })

    const userRatings = [];
    this.props.ratings.forEach( rating => {
      debugger
      if (rating.user_id === currentUser.id) userRatings.push(rating)
    })

    const { bottles } = this.props;
    const allBottles = bottles.map(bottle => {
      return <BottleCardHorz
        key={`${bottle.name}-card-horz`}
        bottle={bottle}
        distillery={distilleries[bottle.distillery_id]}
        regions={this.props.regions}
        ratings={userRatings}
        />
    })

    return (
      <div className='user-profile'>
        <div className='user-profile-detail'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/SCOport-fr-economy.png"} />
          <h2>{currentUser.first_name}</h2>
          <h5>Bottles Added:</h5>
          <h3>{allBottles.length}</h3>
        </div>
        <div className='profile-bottles'>
          {allBottles}
        </div>
      </div>
    )
  }
}

export default UserProfile;