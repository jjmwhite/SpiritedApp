import React from 'react';
import GreetingBarContainer from './greeting_bar/greeting_bar_container';
import Modal from './modal/modal';

const App = () => {
  return (
    <>
      <Modal />
      <div className='app-body'>
        <GreetingBarContainer />
      </div>
    </>
  )
}

export default App;