import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));

export const Routes  = () => {
    return (
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Suspense>
        </Switch>
    );
}