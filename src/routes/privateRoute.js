import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticate from './auth';

export default function PrivateRoute({ children, path }) {
  const isAuthenticated = authenticate();
  return (
    <Route exact path={path}>
      {isAuthenticated ? children : <Redirect to='login'></Redirect>}
    </Route>
  );
}
