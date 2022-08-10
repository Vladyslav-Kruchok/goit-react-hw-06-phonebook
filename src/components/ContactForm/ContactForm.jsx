import React, { useState } from "react";
import PropsType from "prop-types";
import styles from "./ContactForm.module.css";

export const ContactForm = ({onSubmit}) => { 
const [name, setNameContact] = useState("");
const [number, setNumberContact] = useState("");

//transfer to external file (export)
    const formOnSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, number });
        resetFormInput();
    };
    const contact = {
        name: "name",
        number: "number"
    };
    const inputOnChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case contact.name:
                setNameContact(value);
                break;
            case contact.number:
                setNumberContact(value);
                break;
            default:
                return;
        }
    };
    const resetFormInput = () => { 
        setNameContact("");
        setNumberContact("");
    };

    return (
        <form className={styles.form} onSubmit={formOnSubmit}>
            <label className={styles.label}>
                <span className={styles.span}>Name</span>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={inputOnChange}
                    required
                />
            </label>
            <label className={styles.label}>
                <span className={styles.span}>Number</span>
                <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={inputOnChange}
                />
            </label>
            <button className={styles.button} type="submit">Add contacts</button>
        </form>
    );
};
ContactForm.protoType = {
onSubmit: PropsType.func.isRequired
};