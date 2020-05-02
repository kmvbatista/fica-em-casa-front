import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import authenticate from './auth';
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

export default function Routes({ children, isUserLogged }) {
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
      <Route exact path='/forgot-password/:token'>
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
      <Route exact path='/second-signup/:token/:loginType'>
        <SecondSignup></SecondSignup>
      </Route>
      <Route exact path='/use-terms'>
        <UseTerms></UseTerms>
      </Route>
    </Switch>
  );

  function PrivateRoute({ children, path }) {
    const isAuthenticated = authenticate(isUserLogged);
    return (
      <Route exact path={path}>
        {isAuthenticated ? children : <Redirect to='login'></Redirect>}
      </Route>
    );
  }
}
