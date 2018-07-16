import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    USER_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    userDetails: {}
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    console.log(state);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed.', password: '', loading: false };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, loading: false }
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case LOGOUT_USER:
            return state;
        case USER_FETCH_SUCCESS:
            return { ...state, userDetails: action.payload }
        default:
            return state;
    }
}
