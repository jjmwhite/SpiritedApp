import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingBarContainer from './greeting_bar/greeting_bar_container';
import SessionModal from './session_modal/session_modal';
import BottleIndexContainer from './bottles/bottle_index_container';

const App = () => {
  return (
    <>
      <SessionModal />
      <div className='app-body'>
        <GreetingBarContainer />

        <Switch>
          {/* <Route path='/bottles/:id' component={BottleShowContainer} /> */}
          <Route path='/' component={BottleIndexContainer} />
        </Switch>

        <footer>
          <div className='footer-main'>
            <ul>
              <li>
                <img src={awardIcon} alt="ribbon"/>
                <figcaption>Find the world's best whiskies</figcaption>
              </li>
              <li>
                <img src={reviewIcon} alt="star"/>
                <figcaption>Rate and review your favorites</figcaption>
              </li>
              <li>
                <img src={notesIcon} alt="comment"/>
                <figcaption>Read tasting notes before you buy</figcaption>
              </li>
            </ul>
          </div>
          <div className='footer-contact'>
            <h1>Spirited</h1>
            <p>a 'Vivino.com' clone by Jessica White</p>
            <img src={github} alt="View on Github"/>
            <img src={linkedIn} alt="Visit Jessica's LinkedIn"/>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App;