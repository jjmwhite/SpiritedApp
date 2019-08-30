import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingBarContainer from './greeting_bar/greeting_bar_container';
import SessionModal from './session_modal/session_modal';
import BottleIndexContainer from './bottles/bottle_index_container';
import BottleShowContainer from './bottles/bottle_show_container';
import NewBottleContainer from './bottles/new_bottle_container';
import UpdateBottleContainer from './bottles/update_bottle_container';
import UserProfileContainer from './user/user_profile_container';
import DistilleryShowContainer from './distilleries/distillery_show_container';
import Footer from './footer/footer';
import { ProtectedRoute, UserRoute } from '../util/route_util';

const App = () => {
  return (
    <>
      <SessionModal />
      <div className='app-body'>
        <GreetingBarContainer />

        <Switch>
          <ProtectedRoute exact path='/bottles/create' component={NewBottleContainer} />
          <ProtectedRoute exact path='/bottles/:bottleId/edit' component={UpdateBottleContainer} />
          <UserRoute exact path='/:userId/profile' component={UserProfileContainer} />
          <Route exact path='/bottles/:bottleId' component={BottleShowContainer} />
          <Route exact path='/distilleries/:distId' component={DistilleryShowContainer} />
          <Route path='/' component={BottleIndexContainer} />
        </Switch>

        <Footer />
      </div>
      
    </>
  )
};

export default App;