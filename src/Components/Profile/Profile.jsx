import React from 'react';
import ProfileStyle from './Profile.module.css';
import profileImg from '../../img/profile.jpg';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import Post from './MyPosts/Posts/Post';

const Profile = (props) => {
    return <div className={ProfileStyle.profile}>
        <img src={profileImg} alt="" />
        <MyPostsContainer store={props.store}/>
        
    </div>
}

export default Profile