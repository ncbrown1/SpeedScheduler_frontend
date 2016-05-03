import C from '../constants';

const initial_entities_state = {
    users: {},
    orgs: {},
    events: {}
};

export default function entities(state=initial_entities_state, action) {
    switch(action.type) {
        case C.FETCH_USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case C.FETCH_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                users: Object.assign({}, state.users, {
                    [action.payload.id]: action.payload
                })
            });
        case C.FETCH_USER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });

        case C.FETCH_ORG_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case C.FETCH_ORG_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                orgs: Object.assign({}, state.orgs, {
                    [action.payload.id]: action.payload
                })
            });
        case C.FETCH_ORG_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });

        case C.FETCH_ORGS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case C.FETCH_ORGS_SUCCESS:
            const new_orgs = action.payload.map((i) => { return {[i.id]:i} });
            return Object.assign({}, state, {
                isFetching: false,
                orgs: Object.assign({}, state.orgs, ...new_orgs)
            });
        case C.FETCH_ORGS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });

        case C.FETCH_EVENT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case C.FETCH_EVENT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                users: Object.assign({}, state.users, {
                    [action.payload.id]: action.payload
                })
            });
        case C.FETCH_EVENT_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload.error
            });

        default:
            return state;
    }
}