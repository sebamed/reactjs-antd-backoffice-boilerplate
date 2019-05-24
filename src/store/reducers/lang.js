import { LANG_CHANGE } from "../types";

export const langReducer = (state = [], action) => {
    switch (action.type) {
        case LANG_CHANGE:
            return { ...state, locale: action.locale };
        default:
            return state;
    }
}