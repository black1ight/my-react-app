import React from 'react';
import ContentStyle from './Content.module.css';
import profileImg from '../../img/profile.jpg';
import MyPosts from './MyPosts/MyPosts';
// import Post from './MyPosts/Posts/Post';

const Content = () => {
    return <div className={ContentStyle.profile}>
        <img src={profileImg} alt="" />
        <MyPosts />
        
    </div>
}

export default Content