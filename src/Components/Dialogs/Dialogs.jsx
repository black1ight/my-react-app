import React from "react";
import { NavLink } from "react-router-dom";
import messageIcon from './../../img/serge.jpg'
import myMessageIcon from './../../img/post.jpg'
import Style from './Dialogs.module.css';


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
            
            <NavLink className={Style.text}><img src={messageIcon} className={Style.icon} alt='messageIcon'/>{props.message}</NavLink>
        </li>
    )

}

const MyMessage = (props) => {
    return (
        <li className={Style.myMessageItem}>
            <NavLink className={Style.text}><img src={myMessageIcon} className={Style.icon} alt='messageIcon'/>{props.message}</NavLink>
        </li>
    )

}


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

    let messagesElements = state.messages.map(m => {
        if (m.author === 'you') {
            return (
                <MyMessage message={m.message} id={m.id} author={m.author} />
            )
        } return (
            <Message message={m.message} id={m.id} author={m.author} />
        )
    })

    let onSendMessage = () => {

        props.sendMessage()
    }

    let onMessageChange = (e) => {

        let newBody = e.target.value
        props.updateNewMessageBody(newBody)
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
                    <textarea onChange={onMessageChange} value={props.newMessageBody} className={Style.textArea} />
                    <button onClick={onSendMessage} className={Style.button}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs