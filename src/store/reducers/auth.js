import { AUTH_SIGN_IN, AUTH_SIGN_OUT } from "../types";

export const authReducer = (state = [], action) => {
    switch (action.type) {
        case AUTH_SIGN_IN:
            return { ...state, user: action.user, token: action.token };
        case AUTH_SIGN_OUT:
            return { ...state, user: undefined, token: undefined}
        default:
            return state;
    }
}