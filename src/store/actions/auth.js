import { AUTH_SIGN_IN, AUTH_SIGN_OUT } from "../types";

export const signIn = (user, token) => {
    return { 
        type: AUTH_SIGN_IN,
        user,
        token
    }
}

export const signOut = () => {
    return {
        type: AUTH_SIGN_OUT
    }
}