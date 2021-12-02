import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { userReducer } from './user/reducer'
import { chatsReducer } from './chats/reducer'
import { messagesReducer } from './messages/reducer'
import { articlesReducer } from "./articles/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["profile", "articles"],
  }
  
// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, 
    combineReducers({
    user: userReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    articles: articlesReducer,
})
);
  
  // создаем store с использованием persistedReducer
export const store = createStore(
      persistedReducer,
      composeEnhancers(applyMiddleware(thunk))
  );
export const persistor = persistStore(store)

  


