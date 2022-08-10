import React from "react";
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

  export class App extends React.Component {
    state = {
      contacts: INITIAL_STATE,
      filter: ''
    };
    
  //#region SYSTEM FUNC #
  //When app start
  componentDidMount() {
    //data in localStorage
    const contactStorage = localStorage.getItem("contacts");
    //transform to object
    const contactStorageParsed = JSON.parse(contactStorage);
    //check on data in localStorage
    if (contactStorageParsed) {
      //write to state
      this.setState({ contacts: contactStorageParsed });  
    }
  };
  //when data`s updated
  componentDidUpdate(prevProps, prevState)
  {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    };
  //#endregion #

  //#region ON_FUNC #
  //(import) Data from ContactForm
  extFormOnSubmit = (data) => {
      this.setState((prevState) => {
      const result = prevState.contacts.find(item => item.name === data.name);
        if (!result) {
          return { contacts: [...prevState.contacts, this.addId(data)]};
        } else {
          alert(`${data.nameContact} is already in a contact`);
        }
    });
  }
  //del item in ContactList
  extListOnClick = (e) => {
    const id = e.nativeEvent.target.id;
    this.setState((prevState) => {
      const newArr = prevState.contacts.filter(item => item.id !== id);
      return {contacts: [...newArr]};
    });
  };
  //update state filter
  extInputOnInput = (e) => { 
    this.setState({filter: e.target.value});
  };
  //#endregion #

  //#region HELPERS #
  //add "id" by transformation from data to JSON and back
  addId(str) {
    //make id
    const id = nanoid();
    //part one JSON str
    const idStr_PartOne = `{"id":"${id}",`;
    //part two JSON str
    const str_PartTwoo = JSON.stringify(str).slice(1);
    //return new JSON str with Id
    return JSON.parse(`${idStr_PartOne}${str_PartTwoo}`);
    };
  viewContacts = () => {
    const lowerCaseFilter = this.state.filter.toLowerCase();
    const viewContacts = this.state.contacts.filter(
      item => item.name.toLowerCase().includes(lowerCaseFilter)
    );
    return viewContacts;
  };
  //#endregion #
    
    render() {

    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.extFormOnSubmit } />
        <h2>Contacts</h2>
        <Filter onInput={this.extInputOnInput} />
        <ContactList contacts={this.viewContacts()} onClick={this.extListOnClick} />
      </div>
    );
  };
};