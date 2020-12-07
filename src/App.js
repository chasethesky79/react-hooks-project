import './App.css';
import PostList from './post/PostList.js';
import CreatePost from './post/CreatePost';
import UserBar from './user/UserBar';
import './post/posts.css';

const posts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread', author: 'Daniel Bugl'},
  { title: 'Using React Fragments', content: 'Smart lesson to learn', author: 'Bharath Seshadri'},
  { title: 'Fashon Model', content: 'Ambercrombie', author: 'Bobby irwin'}
]
const user = 'Daniel Blog';

export default function App() {
  return (
    <div className="posts-container">
    <UserBar/>
    <br/>
    <CreatePost user={user}/>
    <br/>
    <hr/>
    <PostList posts={posts}/>
    </div>
  )
}
