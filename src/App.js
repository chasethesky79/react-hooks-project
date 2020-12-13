import './App.css';
import PostList from './post/PostList.js';
import CreatePost from './post/CreatePost';
import UserBar from './user/UserBar';
import './post/posts.css';
import { useState, useReducer } from 'react';
import { userReducer } from './user/user-reducer';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread', author: 'Daniel Bugl'},
  { title: 'Using React Fragments', content: 'Smart lesson to learn', author: 'Bharath Seshadri'},
  { title: 'Fashon Model', content: 'Ambercrombie', author: 'Bobby irwin'}
]

export default function App() {
  
  const [user, dispatchUser] = useReducer(userReducer, '')
  const [posts, setPosts] = useState(defaultPosts)

  return (
    <div className="posts-container">
      User: {user}
    <UserBar user={user} dispatch={dispatchUser}/>
    <br/>
    { user && <CreatePost user={user} posts={posts} setPosts={setPosts}/>}
    <br/>
    <hr/>
    <PostList posts={posts}/>
    </div>
  )
}
