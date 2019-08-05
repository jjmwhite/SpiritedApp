import React from 'react';

class UserProfile extends React.Component {

  componentDidMount() {
    debugger
    this.props.fetchUserProfile(this.props.user.id)
              // .then( (bottles) => this.setUserBottles(bottles));
  }

  // setUserBottles(bottles) {
  //   debugger
  //   this.bottles = Object.values(bottles)
  // }

  render() {
    debugger
    // const { bottles } = this.props

    if (this.props.bottles === undefined) {
      debugger
      return (
        <h1>Loading...</h1>
      )
    }

    const allBottles = bottles.map( bottle => {
      return <li>{bottle.name}</li>
    })

    debugger
    return (
      <ul>
        {allBottles}
      </ul>
    )
  }
}

export default UserProfile;