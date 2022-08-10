import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from "../components/ContactForm";
import { ContactList } from "../components/ContactList";
import { Filter } from "../components/Filter";

const INITIAL_STATE = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];
const useLocalStorage = (key, defaultVal) => { 
  const [state, setState] = useState(() => {
    const contactStorage = window.localStorage.getItem(key);
    return JSON.parse(contactStorage) || defaultVal;
  });
      
  useEffect(() => { 
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  
  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", INITIAL_STATE);
  const [filter, setFilter] = useState("");
  //#region ON_FUNC #
  //(import) Data from ContactForm
  const extFormOnSubmit = (data) => {
    //console.log(data.name);
    setContacts((prevState) => {
        //console.log(prevState);
        const result = prevState.find(item => item.name === data.name);
        //console.log(result);
        if (!result) {
          return [...prevState, addId(data)];
        } else {
          alert(`${data.name} is already in a contact`);
          return prevState;
        }
    });
  }
  //del item in ContactList
  const extListOnClick = (e) => {
    const id = e.nativeEvent.target.id;
    setContacts((prevState) => {
      const newArr = prevState.filter(item => item.id !== id);
      return [...newArr];
    });
  };
  //update state filter
  const extInputOnInput = (e) => { 
    setFilter(e.target.value);
  };
  //#endregion #

  //#region HELPERS #
  //add "id" by transformation from data to JSON and back
  function addId(str) {
    //make id
    const id = nanoid();
    //part one JSON str
    const idStr_PartOne = `{"id":"${id}",`;
    //part two JSON str
    const str_PartTwoo = JSON.stringify(str).slice(1);
    //return new JSON str with Id
    return JSON.parse(`${idStr_PartOne}${str_PartTwoo}`);
    };
  const viewContacts = () => {
    //console.log(filter);
    const lowerCaseFilter = filter.toLowerCase();
    //console.log(lowerCaseFilter);
    //console.log(contacts);
    const viewContacts = contacts.filter(
    item => item.name.toLowerCase().includes(lowerCaseFilter));
    //console.log(viewContacts);
    return viewContacts;      
  };
  //#endregion #
    

    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={extFormOnSubmit } />
        <h2>Contacts</h2>
        <Filter onInput={extInputOnInput} />
        {contacts && <ContactList contacts={viewContacts()} onClick={extListOnClick} />}
      </div>
    );
};