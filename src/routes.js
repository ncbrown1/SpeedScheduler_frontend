import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
// import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

const routes = (
    <Route path="/" component={App}>
        {/*<IndexRoute component={LandingPage} />*/}
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;