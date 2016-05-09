import fetch from 'isomorphic-fetch';

// the middleware to call the API for quotes
import { CALL_API } from 'redux-api-middleware';

import C from '../constants';

export function fetchUser(user_id) {
    return {
        [CALL_API]: {
            endpoint: C.API_ROOT + '/users/' + user_id,
            method: 'GET',
            types: [C.FETCH_USER_REQUEST, C.FETCH_USER_SUCCESS, C.FETCH_USER_FAILURE]
        }
    }
}

export function fetchEvent(event_id) {
    return {
        [CALL_API]: {
            endpoint: C.API_ROOT + '/events/' + event_id,
            method: 'GET',
            types: [C.FETCH_EVENT_REQUEST, C.FETCH_EVENT_SUCCESS, C.FETCH_EVENT_FAILURE]
        }
    }
}

export function fetchOrg(org_id) {
    return {
        [CALL_API]: {
            endpoint: C.API_ROOT + '/orgs/' + org_id,
            method: 'GET',
            types: [C.FETCH_ORG_REQUEST, C.FETCH_ORG_SUCCESS, C.FETCH_ORG_FAILURE]
        }
    }
}

export function fetchUsers() {
    return {
        [CALL_API]: {
            endpoint: C.API_ROOT + '/users',
            method: 'GET',
            types: [C.FETCH_USERS_REQUEST, C.FETCH_USERS_SUCCESS, C.FETCH_USERS_FAILURE]
        }
    }
}

export function fetchEvents() {
    return {
        [CALL_API]: {
            endpoint: C.API_ROOT + '/events',
            method: 'GET',
            types: [C.FETCH_EVENTS_REQUEST, C.FETCH_EVENTS_SUCCESS, C.FETCH_EVENTS_FAILURE]
        }
    }
}

export function fetchOrgs() {
    return {
        [CALL_API]: {
            endpoint: C.API_ROOT + '/orgs',
            method: 'GET',
            types: [C.FETCH_ORGS_REQUEST, C.FETCH_ORGS_SUCCESS, C.FETCH_ORGS_FAILURE]
        }
    }
}

// function requestUser(user_id) {
//     return {
//         type: C.FETCH_USER_REQUEST,
//         isFetching: true,
//         user_id
//     };
// }

// function receiveUser(user) {
//     return {
//         type: C.FETCH_USER_SUCCESS,
//         isFetching: false,
//         user
//     };
// }

// function fetchUserError(message) {
//     return {
//         type: C.FETCH_USER_FAILURE,
//         isFetching: false,
//         error: message
//     };
// }

// export function fetchUser(user_id) {
//     return dispatch => {
//         dispatch(requestUser(user_id));

//         return fetch('/api/users/' + user_id)
//             .then(response => { return response.json(); })
//             .then(user => {
//                 dispatch(receiveUser(user));
//             }).catch(err => {
//                 dispatch(fetchUserError("There was an error connecting to the server."));
//             });
//     };
// }