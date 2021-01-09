import './App.css';
import PostList from './post/PostList.js';
import CreatePost from './post/CreatePost';
import UserBar from './user/UserBar';
import './post/posts.css';
import { useReducer, useEffect, useState } from 'react';
import { appReducer } from './app-reducer';
import React from 'react';
import Header from './Header';
import { ThemeContext, StateContext } from './contexts';
import ChangeTheme from './themes/ChangeTheme';

const defaultPosts = [
  { id: 'react-hooks', title: 'React Hooks', content: 'The greatest thing since sliced bread', author: 'Daniel Bugl'},
  { id: 'react-fragments', title: 'Using React Fragments', content: 'Smart lesson to learn', author: 'Bharath Seshadri'},
  { id: 'react-fashion', title: 'Fashon Model', content: 'Ambercrombie', author: 'Bobby irwin'}
]


export default function App({ header }) {

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user } = state;
  const [theme, setTheme ] = useState({ primaryColor: 'blue', secondaryColor: 'purple'});

  useEffect(() => {
   document.title = user ? `${user} - ${header}` : `${header}`
  }, [user, header]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
    <ThemeContext.Provider value={theme}>
    <div className="posts-container">
      <Header text={header}/>
      <ChangeTheme theme={theme} setTheme={setTheme}/>
      <UserBar/>
    <br/>
    { user && <CreatePost/>}
    <br/>
    <hr/>
    <PostList/>
    </div>
    </ThemeContext.Provider>
    </StateContext.Provider>
  )
}
