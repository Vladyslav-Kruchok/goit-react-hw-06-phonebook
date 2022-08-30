import React from 'react';
import * as contactsActions from '../../redux/contacts/contactsActions';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    
    const filterOnInput = (e) => { 
        dispatch(contactsActions.addFilter(e.target.value));
    };

    return (
        <label className={styles.label}>
            <span className={styles.span}>Find contacts by name</span>
            <input className={styles.input} type='text' id='search-box' onInput={filterOnInput} />
        </label>
    );
};