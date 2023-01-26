import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

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
  subscribe(observer) {
    this._callSubscriber = observer
  },
  _callSubscriber() {
    console.log('state changed')
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  }
}

export default store