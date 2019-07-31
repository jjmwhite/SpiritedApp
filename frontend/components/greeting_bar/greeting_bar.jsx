import React from 'react';
// import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const openModal = this.props.openModal;
    const currentUser = this.props.currentUser;
    let userGreeting;
    
    if (currentUser) {
      userGreeting = 
      (<div className='user-greeting'>
        <h2 className='logo-text'>Welcome, {currentUser.first_name}</h2>
        <img className='user-photo' src="https://unsplash.com/photos/pe9T4ROjpzQ"/>
        <button className='logout-button' onClick={this.props.logout}>Log Out</button>
      </div>)
    } else {
      userGreeting = 
      (<div className='user-greeting'>
        <button className='signup-button' onClick={() => openModal('signup')}>Join Us</button>
        <button className='login-button' onClick={() => openModal('login')}>Log In</button>
      </div>)
    }

    return(
      <span className='greeting-bar'>
        <div className='greeting-top-left'>
          <h1 className='app-name'>SPIRITED</h1>
          <input className='search-input' type="text" placeholder='Search will go here...'/>
        </div>
        {userGreeting}
      </span>
    )
  }
}


export default Greeting;