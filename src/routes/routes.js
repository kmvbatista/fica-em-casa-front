import React, { lazy, Suspense } from 'react';
import { Route, Switch, Private } from 'react-router-dom';
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
        <Route exact path='/can-help-options'>
          <CanHelpOptions></CanHelpOptions>
        </Route>
        <Route exact path='/first-signup'>
          <FirstSignup></FirstSignup>
        </Route>
        <Route exact path='/friends'>
          <Friends></Friends>
        </Route>
        <Route exact path='/help-or-get-help'>
          <HelpOrGetHelp></HelpOrGetHelp>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/need-help-form'>
          <NeedHelpForm></NeedHelpForm>
        </Route>
        <Route exact path='/need-help-options'>
          <NeedHelpOptions></NeedHelpOptions>
        </Route>
        <Route exact path='/profile'>
          <Profile></Profile>
        </Route>
        <Route exact path='/second-signup'>
          <SecondSignup></SecondSignup>
        </Route>
      </Suspense>
    </Switch>
  );
}
