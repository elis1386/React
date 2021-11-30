import { ADD_CHAT, DELETE_CHAT } from "./actions"

const chatsArray = []


export const chatsReducer = (state = chatsArray, {type, payload}) => {
    switch(type){
        case ADD_CHAT:
            return [...state, payload]
        case DELETE_CHAT:
            return state.filter(({id}) => id !== payload)
        default:
            return state;
    }
}