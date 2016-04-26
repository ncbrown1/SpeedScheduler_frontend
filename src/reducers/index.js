import { combineReducers } from 'redux';
import auth from './auth';
import entities from './entities';
import errorMessage from './errorMessage';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    auth,
    entities,
    errorMessage,
    routing
});

export default rootReducer;