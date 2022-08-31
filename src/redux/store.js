import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as contactsReducer from './contacts/contactsReducers';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    items: contactsReducer.itemReducer,
    filter: contactsReducer.filterReducer,
});
const persistConfig = {
    key: 'root',
    storage: storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
const store = configureStore({
    reducer: 
        persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
});
export default store;
export const persistor = persistStore(store);