const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {

  _state: {

    dialogsPage: {

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

    },

    profilePage: {

      posts: [
        { id: 1, message: 'Wellcome to my wall', likesCount: 29 },
        { id: 2, message: 'Glory of Ukraine!', likesCount: 67 }
      ],

      newPostText: ''
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('state changed')
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: '0'
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''

      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      debugger
      this._state.dialogsPage.newMessageBody = action.text
      this._callSubscriber(this._state)

    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        message: this._state.dialogsPage.newMessageBody,
        id: this._state.dialogsPage.messages.length + 1,
        author: 'you'
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageBody = ''

      this._callSubscriber(this._state)
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: newText
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (newBody) => {
  
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        text: newBody
    }
}

export default store