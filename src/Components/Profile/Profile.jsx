import React from 'react';
import ProfileStyle from './Profile.module.css';
import profileImg from '../../img/profile.jpg';
import MyPosts from './MyPosts/MyPosts';
// import Post from './MyPosts/Posts/Post';

const Profile = (props) => {
    return <div className={ProfileStyle.profile}>
        <img src={profileImg} alt="" />
        <MyPosts posts={props.posts} addPost={props.addPost} dispatch={props.dispatch}/>
        
    </div>
}

export default Profile