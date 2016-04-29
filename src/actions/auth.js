import fetch from 'isomorphic-fetch';

// the middleware to call the API for quotes
import { CALL_API } from 'redux-api-middleware';

import C from '../constants';

export function loginUser(creds) {
    return {
        [CALL_API]: {
            endpoint: C.API_ROOT + '/auth',
            method: 'POST',
            types: [
                C.LOGIN_REQUEST,
                {
                    type: C.LOGIN_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then(json => {
                            localStorage.setItem('jwt_token', json.token);
                            localStorage.setItem('user_name', json.user.name);
                            localStorage.setItem('user_id', json.user.id);
                            return json;
                        }).catch(err => {});
                    }
                },
                C.LOGIN_FAILURE
            ],
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(creds)
        }
    };
}

function requestLogout() {
    return {
        type: C.LOGOUT_REQUEST,
        isFetching: true,
        isLoggedIn: true
    };
}

function receiveLogout() {
    return {
        type: C.LOGOUT_SUCCESS,
        isFetching: false,
        isLoggedIn: false
    };
}

// Logs the user out
export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_id');
        dispatch(receiveLogout());
    }
}
