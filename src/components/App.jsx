import React from "react";

import {  addItem,
          removeItem,
          addFilter,}
from './Redux/store';

import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "../components/ContactForm";
import { ContactList } from "../components/ContactList";
import { Filter } from "../components/Filter";
import viewContacts from '../helpers/viewContacts';
import addId from '../helpers/addId';

export const App = () => {
  const dispatch = useDispatch();
  //store
  const stateItemValue = useSelector(state => state.items);
  const stateFilterValue = useSelector(state => state.filter);

  //#region ON_FUNC #
  //(import) Add to store Data from ContactForm
  const extFormOnSubmit = (data) => {
    //typeof=object
    //data ==>> {name: 'Dustin Beck', number: '+1 (886) 951-7896'}
    const dataPlusId = addId(data);
    dispatch(addItem(dataPlusId));
  }
  //del item in ContactList
  const extListOnClick = (e) => {
    const id = e.target.id;
    dispatch(removeItem(id));
  };
  //update state filter
  const extInputOnInput = (e) => {
    dispatch(addFilter(e.target.value));
  };
  //#endregion #

    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={extFormOnSubmit } />
        <h2>Contacts</h2>
        <Filter onInput={extInputOnInput} />
        {stateItemValue && <ContactList 
          contacts={viewContacts(stateFilterValue,stateItemValue)}
          onClick={extListOnClick} />}
      </div>
    );
};