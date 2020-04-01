import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('../pages/Home/index'));
const Login = lazy(() => import('../pages/Login/index'));
const Signup = lazy(() => import('../pages/Signup/index'));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/signUp'>
          <Signup></Signup>
        </Route>
      </Suspense>
    </Switch>
  );
}
