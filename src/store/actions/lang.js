import { LANG_CHANGE } from "../types";

export const changeLanguage = (locale) => {
    return { 
        type: LANG_CHANGE,
        locale
    }
}