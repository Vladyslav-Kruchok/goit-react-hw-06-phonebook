import React from "react";
import PropTypes from "prop-types"
import styles from "./Filter.module.css"

export const Filter = ({ onInput}) => {
    return (
        <label className={styles.label}>
            <span className={styles.span}>Find contacts by name</span>
            <input className={styles.input} type="text" id="search-box" onInput={onInput} />
        </label>
    );
};

Filter.protoType = {
    onInput: PropTypes.func.isRequired
}