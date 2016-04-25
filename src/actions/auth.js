import fetch from 'isomorphic-fetch';

// the middleware to call the API for quotes
import { CALL_API } from '../middleware/api';

import C from '../constants';

function requestLogin(creds) {
    return {
        type: C.LOGIN_REQUEST,
        isFetching: true,
        isLoggedIn: false,
        creds
    };
}

function receiveLogin(user) {
    return {
        type: C.LOGIN_SUCCESS,
        isFetching: false,
        isLoggedIn: true,
        token: user.token
    };
}

function loginError(message) {
    return {
        type: C.LOGIN_FAILURE,
        isFetching: false,
        isLoggedIn: false,
        error: message
    };
}

export function loginUser(creds) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password=${creds.password}`
    };

    return dispatch => {
        dispatch(requestLogin(creds));

        return fetch(
            'http://localhost:3001/token-auth/', config
        ).then(response => {
            if (!response.ok) {
                // If there was a problem, we want
                // to dispatch the error condition
                dispatch(loginError(user.message));
                return Promise.reject(user);
            }
            return response.json();
        }).then(user => {
            // If login was successful, set the
            // token into local storage
            localStorage.setItem('token', user.token);
            // Dispatch the success action
            dispatch(receiveLogin(user));
        }).catch(err => {
            console.log(err);
            dispatch(loginError("There was an error connecting to the server."));
        });
    };
}

function requestLogout() {
    return {
        type: C.LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    };
}

function receiveLogout() {
    return {
        type: C.LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    };
}

// Logs the user out
export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        dispatch(receiveLogout());
    }
}
