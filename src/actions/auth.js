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
        username: user.username,
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
            // 'http://localhost:3001/token-auth/', config
            '/api/auth', config
            // '/src/static/auth.json'
        ).then(response => {
            return response.json();
        }).then(user => {
            console.log(user);
            if (user.error) {
                // If there was a problem, we want
                // to dispatch the error condition
                dispatch(loginError(user.error));
                return Promise.reject(user);
            }
            // If login was successful, set the
            // token into local storage
            localStorage.setItem('jwt_token', user.token);
            localStorage.setItem('username', creds.username);

            // Dispatch the success action
            dispatch(receiveLogin(Object.assign({}, user, {username: creds.username})));
        }).catch(err => {});
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
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('username');
        dispatch(receiveLogout());
    }
}
