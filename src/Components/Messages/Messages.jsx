import React from "react";

import MessagesStyle from './Messages.module.css';

const Messages = () => {
    return (
        <div className={MessagesStyle.wrapper}>
            <div className={MessagesStyle.dialogs}>
                <ul className={MessagesStyle.list}>
                    <li>Serge</li>
                    <li>Karina</li>
                    <li>Alena</li>
                    <li>Orlando ZC</li>
                    <li>ChatBot</li>
                </ul>
            </div>
            <div className={MessagesStyle.messages}>
                <ul>
                    <li>
                        Dialog
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Messages