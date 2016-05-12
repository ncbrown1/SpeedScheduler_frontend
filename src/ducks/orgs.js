import { CALL_API } from 'redux-api-middleware';
import { API_ROOT } from '../constants';

const FETCH_ORG_REQUEST = 'ss/orgs/FETCH_ORG_REQUEST';
const FETCH_ORG_SUCCESS = 'ss/orgs/FETCH_ORG_SUCCESS';
const FETCH_ORG_FAILURE = 'ss/orgs/FETCH_ORG_FAILURE';

const FETCH_ORGS_REQUEST = 'ss/orgs/FETCH_ORGS_REQUEST';
const FETCH_ORGS_SUCCESS = 'ss/orgs/FETCH_ORGS_SUCCESS';
const FETCH_ORGS_FAILURE = 'ss/orgs/FETCH_ORGS_FAILURE';

export default function reducer(state = {byId:{}}, action = {}) {
    switch (action.type) {
        case FETCH_ORG_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_ORG_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                byId: Object.assign({}, state, {
                    [action.payload.id]: action.payload
                })
            });
        case FETCH_ORG_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });

        case FETCH_ORGS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_ORGS_SUCCESS:
            const new_orgs = action.payload.map((i) => { return {[i.id]:i} });
            return Object.assign({}, state, {
                isFetching: false,
                byId: Object.assign({}, state.byId, ...new_orgs)
            });
        case FETCH_ORGS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });
        default: return state;
    }
}

export function fetchOrg(org_id) {
    return {
        [CALL_API]: {
            endpoint: API_ROOT + '/orgs/' + org_id,
            method: 'GET',
            types: [FETCH_ORG_REQUEST, FETCH_ORG_SUCCESS, FETCH_ORG_FAILURE]
        }
    }
}

export function fetchOrgs() {
    return {
        [CALL_API]: {
            endpoint: API_ROOT + '/orgs',
            method: 'GET',
            types: [FETCH_ORGS_REQUEST, FETCH_ORGS_SUCCESS, FETCH_ORGS_FAILURE]
        }
    }
}