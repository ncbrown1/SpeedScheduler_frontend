import fetch from 'isomorphic-fetch';

// the middleware to call the API for quotes
import { CALL_API } from '../middleware/api';

import C from '../constants';

function requestUser(userId) {
    return {
        type: C.FETCH_USER_REQUEST,
        userId
    };
}

function receiveUser(user) {
    return {
        type: C.FETCH_USER_SUCCESS,
        user
    };
}

function fetchUserError(message) {
    return {
        type: C.FETCH_USER_FAILURE,
        error: message
    };
}

export function fetchUser(userId) {
    return dispatch => {
        dispatch(requestUser(userId));

        return fetch(
            // 'http://localhost:3001/token-auth/', config
            '/src/static/users/'+userId+'.json'
        ).then(response => {
            if (!response.ok) {
                // If there was a problem, we want
                // to dispatch the error condition
                dispatch(fetchUserError("Bad request"));
                return Promise.reject(response);
            }
            return response.json();
        }).then(user => {
            console.log(user);
            // Dispatch the success action
            dispatch(receiveUser(user));
        }).catch(err => {
            console.log(err);
            dispatch(fetchUserError("There was an error connecting to the server."));
        });
    };
}