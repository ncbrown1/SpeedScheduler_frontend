import C from '../constants';

const initial_entities_state = {
    users: {},
    orgs: {},
    events: {}
};

export default function entities(state=initial_entities_state, action) {
    switch(action.type) {
        case C.FETCH_USER_REQUEST:
            return Object.assign({}, state);
        case C.FETCH_USER_SUCCESS:
            return Object.assign({}, state);
        case C.FETCH_USER_FAILURE:
            return Object.assign({}, state);

        case C.FETCH_ORG_REQUEST:
            return Object.assign({}, state);
        case C.FETCH_ORG_SUCCESS:
            return Object.assign({}, state);
        case C.FETCH_ORG_FAILURE:
            return Object.assign({}, state);

        case C.FETCH_EVENT_REQUEST:
            return Object.assign({}, state);
        case C.FETCH_EVENT_SUCCESS:
            return Object.assign({}, state);
        case C.FETCH_EVENT_FAILURE:
            return Object.assign({}, state);

        default:
            return state;
    }
}