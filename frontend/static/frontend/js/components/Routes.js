import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Err404 = lazy(() => import('./Err404'));
const Home = lazy(() => import('./Home/Home'));
const About = lazy(() => import('./About/About'));
const Members = lazy(() => import('./Members/Members'));
const Member = lazy(() => import('./Members/Member'));
const Construction = lazy(() => import('./Construction'));


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/members' component={Members} />
        <Route path='/members/:memberSlug' component={Member} />
        <Route exact path='/alumni' component={Construction} />
        <Route exact path='/gallery' component={Construction} />
        <Route exact path='/contact' component={Construction} />
        <Route component={Err404} status={404} />
    </Switch>
);
