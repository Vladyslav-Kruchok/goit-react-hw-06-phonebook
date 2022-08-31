import * as contactsActions from './contactsActions';
import { createReducer } from '@reduxjs/toolkit';

//reducer items
export const itemReducer = createReducer([], {
    [contactsActions.addItem]: (state, contact) => {
        const contactName = contact.payload.name;
        const result = state.find(item =>{ 
            return item.name === contactName;
        });

        if(!result) {
            const newState = [...state, contact.payload];
            return newState;
        } else {
        alert(`${contactName} is already in a contact`);
            return;
        }
    },
    [contactsActions.removeItem]: (state, itemId) => {
        const id = itemId.payload;
        const newArr = state.filter(item => item.id !== id);
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