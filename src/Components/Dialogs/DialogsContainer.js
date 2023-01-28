import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessage = () =>{
        props.store.dispatch(sendMessageCreator())
    }

    let onMessageChange = (newBody) => {

        props.store.dispatch(updateNewMessageBodyCreator(newBody))
    }

    return <Dialogs sendMessage={onSendMessage} updateNewMessageBody={onMessageChange} dialogsPage={state}/>
}

export default DialogsContainer