
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text
            return state
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageBody,
                id: state.messages.length + 1,
                author: 'you'
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (newBody) => {

  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    text: newBody
  }
}

export default dialogsReducer