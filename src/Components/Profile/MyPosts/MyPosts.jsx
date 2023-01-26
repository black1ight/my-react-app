import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import Post from './Posts/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef()

    let addPost = () => {

        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {

        let newText = newPostElement.current.value
        let action = updateNewPostTextActionCreator(newText)
        props.dispatch(action)
    }

    return <div className={MyPostsStyle.MyPosts}>
        <div className={MyPostsStyle.form}>
            <input onChange={onPostChange} value={props.newPostText} ref={newPostElement} placeholder='typing...' />
            <button onClick={addPost} className={MyPostsStyle.PostBtn}>Post</button>
        </div>
        {postElement}
    </div>
}

export default MyPosts