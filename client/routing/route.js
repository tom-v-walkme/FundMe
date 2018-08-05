import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import FundEvent from '../newFundEvent/newFundEvent';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/newFundEvent" component={FundEvent}/>
        </Switch>
    </Router>
);