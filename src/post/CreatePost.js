import React, { useState } from 'react';

export default function CreatePost({user, posts, setPosts}){

    const defaultPost = {title: '', content:'', author: user};
    const [post, setPost] = useState(defaultPost);

    const handleSubmit = (event) => {
        setPosts([...posts, post]);
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