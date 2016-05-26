import { CALL_API } from 'redux-api-middleware';
import { API_ROOT2 } from '../constants';

const FETCH_EVENT_REQUEST = 'ss/events/FETCH_EVENT_REQUEST';
const FETCH_EVENT_SUCCESS = 'ss/events/FETCH_EVENT_SUCCESS';
const FETCH_EVENT_FAILURE = 'ss/events/FETCH_EVENT_FAILURE';

const FETCH_EVENTS_REQUEST = 'ss/events/FETCH_EVENTS_REQUEST';
const FETCH_EVENTS_SUCCESS = 'ss/events/FETCH_EVENTS_SUCCESS';
const FETCH_EVENTS_FAILURE = 'ss/events/FETCH_EVENTS_FAILURE';

const FETCH_HOSTS_REQUEST = 'ss/events/FETCH_HOSTS_REQUEST';
const FETCH_HOSTS_SUCCESS = 'ss/events/FETCH_HOSTS_SUCCESS';
const FETCH_HOSTS_FAILURE = 'ss/events/FETCH_HOSTS_FAILURE';

const FETCH_TIMES_REQUEST = 'ss/events/FETCH_TIMES_REQUEST';
const FETCH_TIMES_SUCCESS = 'ss/events/FETCH_TIMES_SUCCESS';
const FETCH_TIMES_FAILURE = 'ss/events/FETCH_TIMES_FAILURE';

export default function reducer(state = {
    isFetchingEvents: true,
    isFetchingHosts: true,
    isFetchingTimes: true,
    byId:{}
    }, action = {}) {
    switch (action.type) {
        case FETCH_EVENT_REQUEST:
            return Object.assign({}, state, {
                isFetchingEvents: true
            });
        case FETCH_EVENT_SUCCESS:
            return Object.assign({}, state, {
                isFetchingEvents: false,
                byId: Object.assign({}, state.byId, {
                    [action.payload.id]: Object.assign({}, state.byId[action.payload.id], action.payload)
                })
            });
        case FETCH_EVENT_FAILURE:
            return Object.assign({}, state, {
                isFetchingEvents: false,
                error: action.payload.error
            });

        case FETCH_EVENTS_REQUEST:
            return Object.assign({}, state, {
                isFetchingEvents: true
            });
        case FETCH_EVENTS_SUCCESS:
            const new_events = action.payload.results.map((i) => { return {[i.id]:i} });
            return Object.assign({}, state, {
                isFetchingEvents: false,
                byId: Object.assign({}, state.byId, ...new_events)
            });
        case FETCH_EVENTS_FAILURE:
            return Object.assign({}, state, {
                isFetchingEvents: false,
                error: action.payload.error
            });

        case FETCH_HOSTS_REQUEST:
            return Object.assign({}, state, {
                isFetchingHosts: true
            });
        case FETCH_HOSTS_SUCCESS:
            const hosts = action.payload.map((i) => { return {[i.id]:i} });
            return Object.assign({}, state, {
                isFetchingHosts: false,
                byId: Object.assign({}, state.byId, {
                    [action.meta.id]: Object.assign({}, state.byId[action.meta.id], {
                        hosts: Object.assign({},...hosts)
                    })
                })
            });
        case FETCH_HOSTS_FAILURE:
            return Object.assign({}, state, {
                isFetchingHosts: false,
                error: action.payload.error
            });


        case FETCH_TIMES_REQUEST:
            return Object.assign({}, state, {
                isFetchingTimes: true
            });
        case FETCH_TIMES_SUCCESS:
            var timesbyhost = {}
            action.payload.map((x) => {
                timesbyhost[x.host] = timesbyhost[x.host] || [];
                timesbyhost[x.host].push(x)
            });
            return Object.assign({}, state, {
                isFetchingTimes: false,
                byId: Object.assign({}, state.byId, {
                    [action.meta.id]: Object.assign({}, state.byId[action.meta.id], {
                        times: timesbyhost
                    })
                })
            });
        case FETCH_TIMES_FAILURE:
            return Object.assign({}, state, {
                isFetchingTimes: false,
                error: action.payload.error
            });

        default: return state;
    }
}

export function fetchEvent(event_id) {
    return {
        [CALL_API]: {
            endpoint: API_ROOT2 + '/events/' + event_id + '/',
            method: 'GET',
            types: [FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE],
            headers: {
                'Authorization':'Token '+localStorage.getItem('id_token')
            },
        }
    }
}

export function fetchEvents() {
    return {
        [CALL_API]: {
            endpoint: API_ROOT2 + '/events/',
            method: 'GET',
            types: [FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE],
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token '+localStorage.getItem('id_token')
            },
        }
    }
}

export function fetchHosts(event_id) {
    return {
        [CALL_API]: {
            endpoint: API_ROOT2 + '/events/' + event_id + '/hosts/',
            method: 'GET',
            types: [FETCH_HOSTS_REQUEST, {'type': FETCH_HOSTS_SUCCESS,meta: { id: event_id }}, FETCH_HOSTS_FAILURE],
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token '+localStorage.getItem('id_token')
            },
        }
    }
}

export function fetchTimes(event_id) {
    return {
        [CALL_API]: {
            endpoint: API_ROOT2 + '/events/' + event_id + '/times/',
            method: 'GET',
            types: [FETCH_TIMES_REQUEST, {'type': FETCH_TIMES_SUCCESS,meta: { id: event_id }}, FETCH_TIMES_FAILURE],
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token '+localStorage.getItem('id_token')
            },
        }
    }
}