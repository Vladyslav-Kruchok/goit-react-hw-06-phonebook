import React from "react";
import PropsType from "prop-types";
import styles from "./ContactForm.module.css";

//import styles from "./ContactForm.module.css";

export class ContactForm extends React.Component {
    static protoType = {
        onSubmit: PropsType.func.isRequired
    };

    state = {
        name: '',
        number: ''
    };

    //transfer to external file (export)
    formOnSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetFormInput();
    };
    //universal update state
    inputOnChange = (e) => {
        const {name, value} = e.currentTarget;
        this.setState({ [name]: value });
    };
    //clear data in forme
    resetFormInput = () => { 
        this.setState({ name: '', number: '' });
    };
    render() {
        return (
            <form className={styles.form} onSubmit={this.formOnSubmit}>
                <label className={styles.label}>
                    <span className={styles.span}>Name</span>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.inputOnChange}
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
                        value={this.state.number}
                        onChange={this.inputOnChange}
                    />
                </label>
                <button className={styles.button} type="submit">Add contacts</button>
            </form>
        );
    };
};