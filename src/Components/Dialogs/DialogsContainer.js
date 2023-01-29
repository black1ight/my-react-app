import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import StoreContext from "../../StoreContext"
import Dialogs from "./Dialogs"


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage

                let onSendMessage = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onMessageChange = (newBody) => {

                    store.dispatch(updateNewMessageBodyCreator(newBody))
                }

                return <Dialogs sendMessage={onSendMessage} updateNewMessageBody={onMessageChange} dialogsPage={state} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer