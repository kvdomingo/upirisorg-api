import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Err404 = lazy(() => import('./Err404'));
const Home = lazy(() => import('./Home/Home'));
const Members = lazy(() => import('./Members/Members'));
const Member = lazy(() => import('./Members/Member'));


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/members' component={Members} />
        <Route path='/member/:memberSlug' component={Member} />
        <Route component={Err404} status={404} />
    </Switch>
);
