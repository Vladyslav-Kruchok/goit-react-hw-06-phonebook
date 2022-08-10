import PropsType from "prop-types";
import React from "react";
import { ListItem } from "../ListItem";

export const ContactList = ({ contacts, onClick }) => { 
        return (
            <ul>
                {
                    contacts.map(({ id, name, number }) => 
                        <ListItem onClick={onClick} key={id} id={id} name={name} number={number} />
                    )
                }
            </ul>
        );
};

ContactList.protoType = {
    contacts: PropsType.arrayOf(PropsType.shape({
            id: PropsType.string.isRequired,
            name: PropsType.string.isRequired,
            number: PropsType.string.isRequired
        }
    )),
    onClick: PropsType.func.isRequired
    };