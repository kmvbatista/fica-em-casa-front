import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Login = lazy(() => import('../pages/Login/index'));
const SignIn = lazy(() => import('../pages/SignIn/index'));
const ChoseGroup = lazy(() => import('../pages/ChooseGroup/index'));
const NeedHelpForm = lazy(() => import('../pages/NeedHelpForm/index'));
const NeedHelpOptions = lazy(() => import('../pages/NeedHelpOptions/index'));
const CanHelpOptions = lazy(() => import('../pages/CanHelpOptions/index'));
const AvailableHelpers = lazy(() => import('../pages/AvailableHelpers/index'));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/'>
          <Login></Login>
        </Route>
        <Route exact path='/sign-in'>
          <SignIn></SignIn>
        </Route>
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
        <Route exact path='/available-helpers'>
          <AvailableHelpers></AvailableHelpers>
        </Route>
      </Suspense>
    </Switch>
  );
}
