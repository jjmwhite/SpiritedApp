import React from 'react';
import BottleCardHorz from '../bottles/bottle_card_horz';

class UserProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUserProfile(this.props.user.id)
  }

  render() {
    const { user } = this.props;
    const { bottles } = this.props;
    const { distilleries } = this.props;

    if (_.isEmpty(bottles)) {
      return (
        <h1 className='loading'>Loading...</h1>
      )
    }

    const allBottles = bottles.map(bottle => {
      debugger
      return <BottleCardHorz
        key={bottle.name}
        bottle={bottle}
        distillery={distilleries[bottle.distillery_id]}
        />
    })

    debugger
    return (
      <div className='user-profile'>
        <div className='user-profile-detail'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/SCOport-fr-economy.png"} />
          <h2>{user.first_name}</h2>
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