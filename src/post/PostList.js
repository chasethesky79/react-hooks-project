import Post from './Post';
import React, { useContext } from 'react';
import { StateContext } from '../contexts';

export default function PostList(){

    const { state: { posts }} = useContext(StateContext);
    return (
        <div>
            {posts.map((p, index) => 
                <React.Fragment key={`post-${index}`}>
                <Post {...p}/>
                  <hr/>
            </React.Fragment>)}
        </div>
    )
}