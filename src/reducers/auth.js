import C from '../constants';

const initial_auth_state = {
    isFetching: false,
    isLoggedIn: localStorage.getItem('jwt_token') ? true : false,
    username: localStorage.getItem('username') || ""
};

export default function auth(state=initial_auth_state, action) {
    switch(action.type) {
        case C.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isLoggedIn: false,
                user: action.creds
            });
        case C.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isLoggedIn: true,
                username: action.payload.user.username,
                error: '',
            });
        case C.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isLoggedIn: false,
                error: action.payload.response.error || ''
            });
        case C.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case C.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isLoggedIn: false
            });
        default:
            return state;
    }
}