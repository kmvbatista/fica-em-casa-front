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
import FriendsFirstAccess from '../pages/Friends/FirstAcess';
import UseTerms from '../pages/UseTerm';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ForgotPassword from '../pages/ForgotPassword';

export default function Routes({ children }) {
  return (
    <Switch>
      <PrivateRoute exact path='/'>
        <Home>{children}</Home>
      </PrivateRoute>
      <PrivateRoute path='/can-help-options'>
        <CanHelpOptions>{children}</CanHelpOptions>
      </PrivateRoute>
      <Route exact path='/first-signup'>
        <FirstSignup></FirstSignup>
      </Route>
      <PrivateRoute exact path='/friends'>
        <Friends>{children}</Friends>
      </PrivateRoute>
      <PrivateRoute exact path='/friends-first-access'>
        <FriendsFirstAccess>{children}</FriendsFirstAccess>
      </PrivateRoute>
      <Route exact path='/login'>
        <Login></Login>
      </Route>
      <Route exact path='/forgot-password'>
        <ForgotPassword></ForgotPassword>
      </Route>
      <Route exact path='/need-help-form'>
        <NeedHelpForm></NeedHelpForm>
      </Route>
      <PrivateRoute exact path='/need-help-options'>
        <NeedHelpOptions>{children}</NeedHelpOptions>
      </PrivateRoute>
      <PrivateRoute exact path='/profile'>
        <Profile></Profile>
      </PrivateRoute>
      <Route exact path='/second-signup'>
        <SecondSignup></SecondSignup>
      </Route>
      <Route exact path='/use-terms'>
        <UseTerms></UseTerms>
      </Route>
    </Switch>
  );
}
