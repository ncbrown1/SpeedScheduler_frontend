import { CALL_API } from 'redux-api-middleware';
import { API_ROOT } from '../constants';

const LOGIN_REQUEST = 'ss/auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'ss/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'ss/auth/LOGIN_FAILURE';
const LOGOUT_REQUEST = 'ss/auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'ss/auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'ss/auth/LOGOUT_FAILURE';

const initial_state = {
    isFetching: false,
    isLoggedIn: localStorage.getItem('jwt_token') ? true : false,
    username: localStorage.getItem('username') || ""
};

export default function reducer(state=initial_state, action={}) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isLoggedIn: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isLoggedIn: true,
                username: action.payload.user.username,
                error: '',
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isLoggedIn: false,
                error: action.payload.response.error || ''
            });
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isLoggedIn: false
            });
        default:
            return state;
    }
}

export function loginUser(creds) {
    return {
        [CALL_API]: {
            endpoint: API_ROOT + '/auth',
            method: 'POST',
            types: [
                LOGIN_REQUEST,
                {
                    type: LOGIN_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then(json => {
                            localStorage.setItem('jwt_token', json.token);
                            localStorage.setItem('user_name', json.user.name);
                            localStorage.setItem('user_id', json.user.id);
                            return json;
                        }).catch(err => {});
                    }
                },
                LOGIN_FAILURE
            ],
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(creds)
        }
    };
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isLoggedIn: true
    };
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
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