import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import Post from './Posts/Post'

const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {

        let newText = newPostElement.current.value
        props.updateNewPostText(newText)
    }

    return <div className={MyPostsStyle.MyPosts}>
        <div className={MyPostsStyle.form}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} placeholder='typing...' />
            <button onClick={onAddPost} className={MyPostsStyle.PostBtn}>Post</button>
        </div>
        {postElement}
    </div>
}

export default MyPosts