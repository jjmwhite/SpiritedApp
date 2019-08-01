import React from 'react';
import { Route } from 'react-router-dom';
import GreetingBarContainer from './greeting_bar/greeting_bar_container';
import Modal from './modal/modal';
import BottleIndexContainer from './bottles/bottle_index_container';

const App = () => {
  return (
    <>
      <Modal />
      <div className='app-body'>
        <GreetingBarContainer />

        <Route path='/' component={BottleIndexContainer} />

      </div>
    </>
  )
}

export default App;