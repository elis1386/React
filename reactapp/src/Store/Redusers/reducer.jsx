import { Toggele_Checkbox } from "./actions"

const initialState = {
    checkbox: false,
    name: 'default name',
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case Toggele_Checkbox:
            return {
                ...state,
                checkbox: !state.checkbox,
            }
        default:
            return state;
    }
}