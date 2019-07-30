import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const currentUser = this.props.currentUser;
    let userGreeting;
    
    debugger
    
    if (currentUser) {
      debugger
      userGreeting = 
      (<>
        <h2 className='user-greeting'>Welcome, {currentUser.first_name}</h2>
        <img className='user-photo' src="https://unsplash.com/photos/pe9T4ROjpzQ"/>
        <button className='logout-button' onClick={this.props.logout}>Log Out</button>
      </>)
    } else {
      debugger
      userGreeting = 
      (<>
        <Link to='/signup' className='session-button'>Join Us</Link>
        <Link to='/login' className='session-button'>Log In</Link>
      </>)
    }

    return(
      <div className='greeting-bar'>
        <h1 className='app-name'>SPIRITED</h1>
        <input type="text" placeholder='search will go here'/>
        {userGreeting}
      </div>
    )
  }
}


export default Greeting;