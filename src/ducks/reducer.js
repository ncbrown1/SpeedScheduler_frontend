import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import events from './events';
import orgs from './orgs';
import users from './users';
import errorMessage from './errorMessage';

const rootReducer = combineReducers({
    routing: routerReducer,
    auth,
    events,
    orgs,
    users,
    errorMessage,
});

export default rootReducer;