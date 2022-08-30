import { createAction } from '@reduxjs/toolkit';

//action items
export const addItem = createAction('items/addItem');
export const addArrItems = createAction('items/addArrItems');
export const removeItem = createAction('items/removeItem');
export const toLocalStorage = createAction('items/toLocalStorage');
//action filter
export const addFilter = createAction('filter/addFilter');