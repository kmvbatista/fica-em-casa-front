import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
const Login = lazy(() => import('../pages/Login/index'));
const SignIn = lazy(() => import('../pages/SignIn/index'));
const Login2 = lazy(() => import('../pages/Login2/index'));
=======
const FirstSignup = lazy(() => import('../pages/FirstSignup/index'));
// const SecondSignup = lazy(() => import('../pages/SecondSignup/index'));
>>>>>>> 77200a2dbb77861e6cb6ebaa0ea329fc2ff804eb
const ChoseGroup = lazy(() => import('../pages/ChooseGroup/index'));
const NeedHelpForm = lazy(() => import('../pages/NeedHelpForm/index'));
const NeedHelpOptions = lazy(() => import('../pages/NeedHelpOptions/index'));
const CanHelpOptions = lazy(() => import('../pages/CanHelpOptions/index'));
const HelpBeHelped = lazy(() => import('../pages/HelpOrBeHelped/index'));
const Profile = lazy(() => import('../pages/Profile/index'));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/first-signup'>
          <FirstSignup></FirstSignup>
        </Route>
<<<<<<< HEAD
        <Route exact path='/login2'>
          <Login2></Login2>
        </Route>
=======
        {/* <Route exact path='/second-signup'>
          <SecondSignup></SecondSignup>
        </Route> */}
>>>>>>> 77200a2dbb77861e6cb6ebaa0ea329fc2ff804eb
        <Route exact path='/choose-group'>
          <ChoseGroup></ChoseGroup>
        </Route>
        <Route exact path='/need-help-form'>
          <NeedHelpForm></NeedHelpForm>
        </Route>
        <Route exact path='/need-help-options'>
          <NeedHelpOptions></NeedHelpOptions>
        </Route>
        <Route exact path='/can-help-options'>
          <CanHelpOptions></CanHelpOptions>
        </Route>
        <Route exact path='/help'>
          <HelpBeHelped></HelpBeHelped>
        </Route>
        <Route exact path='/profile'>
          <Profile></Profile>
        </Route>
      </Suspense>
    </Switch>
  );
}
