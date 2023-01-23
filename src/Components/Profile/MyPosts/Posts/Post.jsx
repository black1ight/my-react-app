import React from 'react';
import PostStyle from './Post.module.css';
import PostImg from '../../../../img/post.jpg'

const Post = (props) => {
    return <div className={PostStyle.item}>
        <img src={PostImg} alt='post' />
        <p>{props.message}</p>
        <button className={PostStyle.remove}></button>
        <span>like{' ' + props.likesCount}</span>
    </div>
}

export default Post