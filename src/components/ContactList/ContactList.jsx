import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';

import { ListItem } from '../ListItem';

import viewContacts from '../../helpers/viewContacts';

export const ContactList = () => { 
    const dispatch = useDispatch();
    //store
    const stateItemValue = useSelector(state => state.items);
    const stateFilterValue = useSelector(state => state.filter);
    
    const contacts = viewContacts(stateFilterValue, stateItemValue);

    const onClickDel = (e) => { 
        const id = e.target.id;
        dispatch(contactsActions.removeItem(id));
    };
    return (
        <ul>
            {
                stateItemValue && contacts.map(({ id, name, number }) => 
                    <ListItem onClick={onClickDel} key={id} id={id} name={name} number={number} />
                )
            }
        </ul>
    );
};