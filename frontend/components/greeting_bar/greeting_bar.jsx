import React from 'react';

class Greeting extends React.Component {

  render() {
    const openSessionModal = this.props.openSessionModal;
    const currentUser = this.props.currentUser;
    let userGreeting;
    
    if (currentUser) {
      userGreeting = 
      (<div className='user-greeting'>
        <h2>Welcome, {currentUser.first_name}</h2>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/SCOport-fr-economy.png"}/>
        <button className='logout-button' onClick={this.props.logout}>Log Out</button>
      </div>)
    } else {
      userGreeting = 
      (<div className='user-greeting'>
        <button className='signup-button' onClick={() => openSessionModal('signup')}>Join Us</button>
        <button className='login-button' onClick={() => openSessionModal('login')}>Log In</button>
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