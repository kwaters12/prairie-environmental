import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SET_AUTHENTICATED_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    fullname: '',
    user: null,
    error: '',
    loading: false,
    client: '',
    id_token: '',
    expiry: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error:
                    'Authentication Failed.',
                password: '',
                loading: false
            };
        case SET_AUTHENTICATED_USER:
            console.log(action);
            console.log(state);
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};
