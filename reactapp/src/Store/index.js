import {createStore, combineReducers} from 'redux'
import { userReducer } from './user/reducer'
import { chatsReducer } from './chats/reducer'
import { messagesReducer } from './messages/reducer'


export const store = createStore(
    combineReducers({
        user: userReducer,
        chats: chatsReducer,
        messages: messagesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

