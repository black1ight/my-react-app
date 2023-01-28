
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [

        { name: 'Serge', id: 1 },
        { name: 'Karina', id: 2 },
        { name: 'Orlando ZC', id: 3 },
        { name: 'Alyona', id: 4 },
        { name: 'ChatBot', id: 5 }

      ],

      messages: [

        { message: 'Здорова. Ну что там, плагину крутишь?', id: 1, author: 'you' },
        { message: 'Привет. Та не, ютубы смотрю. Чёт не хоцца сегодня', id: 2, author: 'serge' },
        { message: 'А пиву хоцца?)', id: 3, author: 'you' },
        { message: 'Гг. Ну не знаю даже. Разве что под корюшку))', id: 4, author: 'serge' },
        { message: 'Хех) Ну тогда беги в магаз.', id: 5, author: 'you' },
        { message: 'И сухарей побольше', id: 6, author: 'you' },
        { message: 'Тока по кустам, шоб патрули не спалили))))))))', id: 7, author: 'you' },
        { message: 'Да ну иво нахой, ты шо..... %)))', id: 8, author: 'serge' },
        { message: 'Не хоцца так', id: 9, author: 'serge' },
        { message: ')))', id: 10, author: 'you' },

      ],

      newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
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