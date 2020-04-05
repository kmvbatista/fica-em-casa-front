import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Login = lazy(() => import('../pages/Login/index'));
const Signup = lazy(() => import('../pages/Signup/index'));
const ChoseGroup = lazy(() => import('../pages/ChooseGroup/index'));
const NeedHelpForm = lazy(() => import('../pages/NeedHelpForm/index'));
const NeedHelpOptions = lazy(() => import('../pages/NeedHelpOptions/index'));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/'>
          <Login></Login>
        </Route>
        <Route exact path='/signUp'>
          <Signup></Signup>
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
      </Suspense>
    </Switch>
  );
}
