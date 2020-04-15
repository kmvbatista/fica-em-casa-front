import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import FirstSignup from '../pages/FirstSignup';
import SecondSignup from '../pages/SecondSignup';
import Home from '../pages/Home';
import NeedHelpForm from '../pages/NeedHelpForm';
import NeedHelpOptions from '../pages/NeedHelpOptions';
import CanHelpOptions from '../pages/CanHelpOptions';
import Friends from '../pages/Friends/FriendsList';
import HelpOrGetHelp from '../pages/Friends/FirstAcess';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

export default function Routes({ children }) {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/'>
          <Home>{children}</Home>
        </Route>
        <PrivateRoute path='/can-help-options'>
          <CanHelpOptions>{children}</CanHelpOptions>
        </PrivateRoute>
        <Route exact path='/first-signup'>
          <FirstSignup></FirstSignup>
        </Route>
        <PrivateRoute exact path='/friends'>
          <Friends>{children}</Friends>
        </PrivateRoute>
        <PrivateRoute exact path='/help-or-get-help'>
          <HelpOrGetHelp>{children}</HelpOrGetHelp>
        </PrivateRoute>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute exact path='/need-help-form'>
          <NeedHelpForm></NeedHelpForm>
        </PrivateRoute>
        <PrivateRoute exact path='/need-help-options'>
          <NeedHelpOptions>{children}</NeedHelpOptions>
        </PrivateRoute>
        <PrivateRoute exact path='/profile'>
          <Profile>{children}</Profile>
        </PrivateRoute>
        <Route exact path='/second-signup'>
          <SecondSignup></SecondSignup>
        </Route>
      </Suspense>
    </Switch>
  );
}
