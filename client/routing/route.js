import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import NewFundEvent from '../newFundEvent/newFundEvent';
import FundEvent from '../fundEvent/fundEvent';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/newFundEvent" component={NewFundEvent}/>
            <Route exact path="/fundEvent" component={FundEvent}/>
            <Redirect from="/" to="fundEvent" />
        </Switch>
    </Router>
);