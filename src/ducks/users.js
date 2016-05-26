import { CALL_API } from 'redux-api-middleware';
import { API_ROOT } from '../constants';

const FETCH_USER_REQUEST = 'ss/users/FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'ss/users/FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'ss/users/FETCH_USER_FAILURE';

const FETCH_USERS_REQUEST = 'ss/users/FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'ss/users/FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'ss/users/FETCH_USERS_FAILURE';

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                [action.payload.id]: action.payload
            });
        case FETCH_USER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });

        case FETCH_USERS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_USERS_SUCCESS:
            const new_users = action.payload.map((i) => { return {[i.id]:i} });
            return Object.assign({}, state, {
                isFetching: false
            }, ...new_users);
        case FETCH_USERS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });
        default: return state;
    }
}

export function fetchUser(user_id) {
    return {
        [CALL_API]: {
            endpoint: API_ROOT + '/users/' + user_id + '/',
            method: 'GET',
            types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token '+localStorage.getItem('id_token')
            },
        }
    }
}

export function fetchUsers() {
    return {
        [CALL_API]: {
            endpoint: API_ROOT + '/users/',
            method: 'GET',
            types: [FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE],
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token '+localStorage.getItem('id_token')
            },
        }
    }
}