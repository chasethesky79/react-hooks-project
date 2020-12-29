import React, { useState, useContext } from 'react';
import { addPostAction } from './post-actions';
import { StateContext } from '../contexts';

export default function CreatePost(){

    const { state: { user }, dispatch } = useContext(StateContext);
    const defaultPost = {title: '', content:'', author: user};
    const [post, setPost] = useState(defaultPost);

    const handleSubmit = (event) => {
        dispatch(addPostAction(post));
        setPost(defaultPost);
        event.preventDefault();
    }
    const handlePostChange = (event) => {
        const {target: {name, value }} = event;
        setPost(name === 'create-title' ? {...post, title: value } : {...post, content: value });
        event.preventDefault();
    }
    return (
    <form onSubmit={e => e.preventDefault}>
        <div>Author: {user}</div>
        <div>
            <label htmlFor='create-title'>Title:</label>
            <input type='text' name='create-title' id='create-title' value={post.title} onChange={handlePostChange}/>
        </div>
        <textarea name='create-content' value={post.content} onChange={handlePostChange}/>
        <input type='submit' value='Create' onClick={handleSubmit}/>
    </form>
    )
}