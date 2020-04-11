import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const FirstSignup = lazy(() => import('../pages/FirstSignup/index'));
const SecondSignup = lazy(() => import('../pages/SecondSignup/index'));
const ChoseGroup = lazy(() => import('../pages/ChooseGroup/index'));
const NeedHelpForm = lazy(() => import('../pages/NeedHelpForm/index'));
const NeedHelpOptions = lazy(() => import('../pages/NeedHelpOptions/index'));
const CanHelpOptions = lazy(() => import('../pages/CanHelpOptions/index'));
const Friends = lazy(() => import('../pages/Friends/index'));
const HelpOrGetHelp = lazy(() => import('../pages/HelpOrGetHelp/index'));
const Profile = lazy(() => import('../pages/Profile/index'));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/first-signup'>
          <FirstSignup></FirstSignup>
        </Route>
        <Route exact path='/second-signup'>
          <SecondSignup></SecondSignup>
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
        <Route exact path='/friends'>
          <Friends></Friends>
        </Route>
        <Route exact path='/help-or-get-help'>
          <HelpOrGetHelp></HelpOrGetHelp>
        </Route>
        <Route exact path='/profile'>
          <Profile></Profile>
        </Route>
      </Suspense>
    </Switch>
  );
}
