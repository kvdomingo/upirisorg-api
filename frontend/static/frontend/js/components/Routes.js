import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Err404 = lazy(() => import('./Err404'));
const Home = lazy(() => import('./Home/Home'));


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Err404} status={404} />
    </Switch>
);
