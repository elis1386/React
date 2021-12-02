import { SIGN_IN, Toggele_Checkbox, SIGN_OUT } from "./actions"

const initialState = {
    checkbox: false,
    name: 'default name',
    authed: false,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case Toggele_Checkbox:
            return {
                ...state,
                checkbox: !state.checkbox,
            }
            case SIGN_IN:
            return {
                ...state,
                authed: true
            }
            case SIGN_OUT:
            return {
                ...state,
                authed: false
            }
        default:
            return state;
    }
}