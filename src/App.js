import './App.css';
import PostList from './post/PostList.js';
import CreatePost from './post/CreatePost';
import UserBar from './user/UserBar';
import './post/posts.css';
import { useReducer } from 'react';
import { userReducer } from './user/user-reducer';
import { postReducer } from './post/post-reducer';
import { appReducer } from './app-reducer';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread', author: 'Daniel Bugl'},
  { title: 'Using React Fragments', content: 'Smart lesson to learn', author: 'Bharath Seshadri'},
  { title: 'Fashon Model', content: 'Ambercrombie', author: 'Bobby irwin'}
]

export default function App() {

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state;

  return (
    <div className="posts-container">
    <UserBar user={user} dispatch={dispatch}/>
    <br/>
    { user && <CreatePost user={user} posts={posts} dispatch={dispatch}/>}
    <br/>
    <hr/>
    <PostList posts={posts}/>
    </div>
  )
}
