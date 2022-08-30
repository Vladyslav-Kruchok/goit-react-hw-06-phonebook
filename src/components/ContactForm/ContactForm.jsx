import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
    //local state
    const [name, setNameContact] = useState('');
    const [number, setNumberContact] = useState('');
    
    const dispatch = useDispatch();

//transfer to external file (export)
    const formOnSubmit = (e) => {
        //make id
        e.preventDefault();
        const id = nanoid();
        dispatch(contactsActions.addItem({id , name, number }));
        resetFormInput();
    };
    const contactInput = {
        name: 'name',
        number: 'number'
    };
    const inputOnChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case contactInput.name:
                setNameContact(value);
                break;
            case contactInput.number:
                setNumberContact(value);
                break;
            default:
                return;
        }
    };
    const resetFormInput = () => { 
        setNameContact('');
        setNumberContact('');
    };

    return (
        <form className={styles.form} onSubmit={formOnSubmit}>
            <label className={styles.label}>
                <span className={styles.span}>Name</span>
                <input
                    className={styles.input}
                    type='text'
                    name='name'
                    value={name}
                    onChange={inputOnChange}
                    required
                />
            </label>
            <label className={styles.label}>
                <span className={styles.span}>Number</span>
                <input
                    className={styles.input}
                    type='tel'
                    name='number'
                    title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
                    required
                    value={number}
                    onChange={inputOnChange}
                />
            </label>
            <button className={styles.button} type='submit'>Add contacts</button>
        </form>
    );
};