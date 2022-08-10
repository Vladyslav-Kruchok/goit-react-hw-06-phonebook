import PropsType from "prop-types";
import React from "react";
import styles from "./ListItem.module.css";

export const ListItem = ({onClick, id, name, number}) => {
    return (
        <>
            <li className={styles.list}>
                <span className={styles.span}>{name}:</span>
                <a className={styles.link} href={number}>{number}</a>
                <button
                    className={styles.button}
                    id={id}
                    onClick={onClick}
                >Видалити</button>
            </li>
        </>
    );
};

ListItem.protoType = {
    id: PropsType.string.isRequired,
    name: PropsType.string.isRequired,
    number: PropsType.string.isRequired,
    onClick: PropsType.func.isRequired
}