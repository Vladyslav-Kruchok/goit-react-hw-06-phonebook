import { configureStore } from '@reduxjs/toolkit';
import * as contactsReducer from './contacts/contactsReducers';

//store
export const store = configureStore({
    reducer: {
        items: contactsReducer.itemReducer,
        filter: contactsReducer.filterReducer
    }
    });