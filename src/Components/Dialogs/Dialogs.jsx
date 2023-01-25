import React from "react";
import { NavLink } from "react-router-dom";

import Style from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";

const setActive = ({ isActive }) => isActive ? Style.activeLink : 'white';

const DialogsItem = (props) => {

    let Path = `/dialogs/${props.id}`

    return (
        <li className={Style.item}>
            <NavLink className={setActive} to={Path}>{props.name} </NavLink>
        </li>
    )

}

const Message = (props) => {
    return (
        <li className={Style.messageItem}>
            <NavLink className={Style.text}>{props.message}</NavLink>
        </li>
    )

}

const MyMessage = (props) => {
    return (
        <li className={Style.myMessageItem}>
            <NavLink className={Style.text}>{props.message}</NavLink>
        </li>
    )

}


const Dialogs = (props) => {



    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

    let messagesElements = props.messages.map(m => {
        if (m.author === 'you') {
            return (
                <MyMessage message={m.message} id={m.id} author={m.author} />
            )
        } return (
            <Message message={m.message} id={m.id} author={m.author} />
        )
    })

    let newMessageElement = React.createRef()

    let sendMessage = () => {

        props.dispatch(sendMessageCreator())
    }

    let onMessageChange = () => {

        let newBody = newMessageElement.current.value
        let action = updateNewMessageBodyCreator(newBody)
        props.dispatch(action)
    }


    return (
        <div className={Style.wrapper}>
            <div className={Style.dialogs}>
                <ul className={Style.list}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={Style.messageCol}>
                <ul className={Style.message}>
                    {messagesElements}
                </ul>
                <div className={Style.form}>
                    <textarea onChange={onMessageChange} value={props.newMessageBody} className={Style.textArea} ref={newMessageElement}/>
                    <button onClick={sendMessage} className={Style.button}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs