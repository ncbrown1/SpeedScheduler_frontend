import { combineReducers } from 'redux';
import auth from './auth';
import errorMessage from './errorMessage';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    auth,
    errorMessage,
    routing
});

export default rootReducer;