import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import NotFound from './components/NotFound';
import AllOrgsView from './containers/AllOrgsView';
import ShowOrg from './components/ShowOrg';
import AllEventsView from './containers/AllEventsView';
import ShowEvent from './components/ShowEvent';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="login" component={Login} />

        <Route path="orgs">
            <IndexRoute component={AllOrgsView} />
            <Route path=":org">
                <IndexRoute component={ShowOrg} />
                <Route path="events">
                    <IndexRoute component={AllEventsView} />
                    <Route path=":event" component={ShowEvent} />
                </Route>
            </Route>
        </Route>

        <Route path="events">
            <IndexRoute component={AllEventsView} />
            <Route path=":event" component={ShowEvent} />
        </Route>

        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;