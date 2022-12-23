import React from 'react';
import ProfileStyle from './Profile.module.css';
import profileImg from '../../img/profile.jpg';
import MyPosts from './MyPosts/MyPosts';
// import Post from './MyPosts/Posts/Post';

const Profile = () => {
    return <div className={ProfileStyle.profile}>
        <img src={profileImg} alt="" />
        <MyPosts />
        
    </div>
}

export default Profile