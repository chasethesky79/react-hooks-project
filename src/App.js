import './App.css';
import PostList from './post/PostList.js';
import CreatePost from './post/CreatePost';
import UserBar from './user/UserBar';
import './post/posts.css';
import { useState } from 'react';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread', author: 'Daniel Bugl'},
  { title: 'Using React Fragments', content: 'Smart lesson to learn', author: 'Bharath Seshadri'},
  { title: 'Fashon Model', content: 'Ambercrombie', author: 'Bobby irwin'}
]

export default function App() {
  
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState(defaultPosts)

  return (
    <div className="posts-container">
      User: {user}
    <UserBar user={user} setUser={setUser}/>
    <br/>
    { user && <CreatePost user={user} posts={posts} setPosts={setPosts}/>}
    <br/>
    <hr/>
    <PostList posts={posts}/>
    </div>
  )
}
