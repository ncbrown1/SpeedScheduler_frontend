import C from '../constants';

const initial_auth_state = {
    isFetching: false,
    isLoggedIn: localStorage.getItem('jwt_token') ? true : false
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
                errorMsg: '',
            });
        case C.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isLoggedIn: false,
                errorMsg: action.message
            });
        default:
            return state;
    }
}