import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';

const FirstSignup = lazy(() => import('../pages/FirstSignup'));
const SecondSignup = lazy(() => import('../pages/SecondSignup'));
const Home = lazy(() => import('../pages/Home'));
const NeedHelpForm = lazy(() => import('../pages/NeedHelpForm'));
const NeedHelpOptions = lazy(() => import('../pages/NeedHelpOptions'));
const CanHelpOptions = lazy(() => import('../pages/CanHelpOptions'));
const Friends = lazy(() => import('../pages/Friends/FriendsList'));
const HelpOrGetHelp = lazy(() => import('../pages/Friends/FirstAcess'));
const Login = lazy(() => import('../pages/Login'));
const Profile = lazy(() => import('../pages/Profile'));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/can-help-options'>
          <CanHelpOptions></CanHelpOptions>
        </PrivateRoute>
        <Route exact path='/first-signup'>
          <FirstSignup></FirstSignup>
        </Route>
        <PrivateRoute exact path='/friends'>
          <Friends></Friends>
        </PrivateRoute>
        <PrivateRoute exact path='/help-or-get-help'>
          <HelpOrGetHelp></HelpOrGetHelp>
        </PrivateRoute>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute exact path='/need-help-form'>
          <NeedHelpForm></NeedHelpForm>
        </PrivateRoute>
        <PrivateRoute exact path='/need-help-options'>
          <NeedHelpOptions></NeedHelpOptions>
        </PrivateRoute>
        <PrivateRoute exact path='/profile'>
          <Profile></Profile>
        </PrivateRoute>
        <Route exact path='/second-signup'>
          <SecondSignup></SecondSignup>
        </Route>
      </Suspense>
    </Switch>
  );
}
