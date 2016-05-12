import { CALL_API } from 'redux-api-middleware';
import { API_ROOT } from '../constants';

const FETCH_EVENT_REQUEST = 'ss/events/FETCH_EVENT_REQUEST';
const FETCH_EVENT_SUCCESS = 'ss/events/FETCH_EVENT_SUCCESS';
const FETCH_EVENT_FAILURE = 'ss/events/FETCH_EVENT_FAILURE';

const FETCH_EVENTS_REQUEST = 'ss/events/FETCH_EVENTS_REQUEST';
const FETCH_EVENTS_SUCCESS = 'ss/events/FETCH_EVENTS_SUCCESS';
const FETCH_EVENTS_FAILURE = 'ss/events/FETCH_EVENTS_FAILURE';

export default function reducer(state = {byId:{}}, action = {}) {
    switch (action.type) {
        case FETCH_EVENT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_EVENT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                byId: Object.assign({}, state, {
                    [action.payload.id]: action.payload
                })
            });
        case FETCH_EVENT_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });

        case FETCH_EVENTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_EVENTS_SUCCESS:
            const new_events = action.payload.map((i) => { return {[i.id]:i} });
            return Object.assign({}, state, {
                isFetching: false,
                byId: Object.assign({}, state.byId, ...new_events)
            });
        case FETCH_EVENTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });
        default: return state;
    }
}

export function fetchEvent(event_id) {
    return {
        [CALL_API]: {
            endpoint: API_ROOT + '/events/' + event_id,
            method: 'GET',
            types: [FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE]
        }
    }
}

export function fetchEvents() {
    return {
        [CALL_API]: {
            endpoint: API_ROOT + '/events',
            method: 'GET',
            types: [FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE]
        }
    }
}