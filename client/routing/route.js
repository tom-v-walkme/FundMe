import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from '../home/home';
import NewFundEvent from '../newFundEvent/newFundEvent';
import FundEvent from '../fundEvent/fundEvent';
import MakeDonation from '../donate/makeDonation';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/newFundEvent" component={NewFundEvent}/>
            <Route exact path="/fundEvent" component={FundEvent}/>
            <Route exact path="/donate" component={MakeDonation}/>
            <Redirect from="/" to="fundEvent" />
        </Switch>
    </Router>
);