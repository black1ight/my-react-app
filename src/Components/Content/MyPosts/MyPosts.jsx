import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import Post from './Posts/Post'

const MyPosts = () => {
    return <div className={MyPostsStyle.MyPosts}>
        <div className={MyPostsStyle.form}>
            <input placeholder='typing...'/>
            <button className={MyPostsStyle.PostBtn}>Post</button>
        </div>
        <Post message="Wellcome to my wall" />
        <Post message="Glory of Ukraine!" />
    </div>
}

export default MyPosts