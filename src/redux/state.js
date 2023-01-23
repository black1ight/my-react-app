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
        { message: 'Хех) Ну тогда беги в магаз.', id: 5, author: 'you' }

      ]

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
    if (action.type === 'ADD-POST') {
      debugger
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: '0'
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''

      this._callSubscriber(this._state)

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.text
      this._callSubscriber(this._state)

    }
  },

  subscribe(observer) {
    this._callSubscriber = observer
  }

}

export default store