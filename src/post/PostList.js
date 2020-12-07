import Post from './Post';
import React from 'react';

export default function PostList({posts = []}){
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