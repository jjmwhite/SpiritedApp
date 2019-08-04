import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingBarContainer from './greeting_bar/greeting_bar_container';
import SessionModal from './session_modal/session_modal';
// import BottleModal from './bottles/bottle_modal';
import BottleIndexContainer from './bottles/bottle_index_container';
import BottleShowContainer from './bottles/bottle_show_container';
import NewBottleContainer from './bottles/new_bottle_container';
import UpdateBottleContainer from './bottles/update_bottle_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <>
      <SessionModal />
      <div className='app-body'>
        <GreetingBarContainer />
        {/* <BottleModal /> */}

        <Switch>
          <ProtectedRoute exact path='/bottles/create' component={NewBottleContainer} />
          <ProtectedRoute exact path='/bottles/:bottleId/edit' component={UpdateBottleContainer} />
          <Route exact path='/bottles/:bottleId' component={BottleShowContainer} />
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