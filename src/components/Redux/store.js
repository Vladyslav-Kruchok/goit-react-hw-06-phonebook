import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
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

//action items
export const addItem = createAction('items/addItem');
export const addArrItems = createAction('items/addArrItems');
export const removeItem = createAction('items/removeItem');
export const toLocalStorage = createAction('items/toLocalStorage');
//action filter
export const addFilter = createAction('filter/addFilter');


//reducer items
const itemReducer = createReducer(init, {
    [addItem]: (state, contact) => {
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
    [removeItem]: (state, itemId) => {
        const id = itemId.payload;
        const newArr = state.filter(item => item.id !== id);
        window.localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(newArr));
        return [...newArr];
    },
});
//reducer filter
const filterReducer = createReducer('', {
    [addFilter]: (state, filter) => {
        state = filter.payload;
        return state;
    }
});

//store
export const store = configureStore({
    reducer: {
        items: itemReducer,
        filter: filterReducer,
    }
    });