import * as contactsActions from './contactsActions';
import { createReducer } from '@reduxjs/toolkit';
import INITIAL_STATE from 'fakeAPI/fakeAPI';

const KEY_LOCAL_STORAGE = 'contacts';

const init = () => {
    const contactStorage = window.localStorage.getItem(KEY_LOCAL_STORAGE);
    if((contactStorage === '[]' || contactStorage===null)) {
        window.localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(INITIAL_STATE));
        return INITIAL_STATE;
    }
    else {
        return JSON.parse(contactStorage);
    }
};
//reducer items
export const itemReducer = createReducer(init, {
    [contactsActions.addItem]: (state, contact) => {
        const contactName = contact.payload.name;
        const result = state.find(item =>{ 
            return item.name === contactName;
        });

        if(!result) {
            const newState = [...state, contact.payload];
            window.localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(newState));
            return newState;
        } else {
        alert(`${contactName} is already in a contact`);
            return;
        }
    },
    [contactsActions.removeItem]: (state, itemId) => {
        const id = itemId.payload;
        const newArr = state.filter(item => item.id !== id);
        window.localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(newArr));
        return [...newArr];
    },
});
//reducer filter
export const filterReducer = createReducer('', {
    [contactsActions.addFilter]: (state, filter) => {
        state = filter.payload;
        return state;
    }
});