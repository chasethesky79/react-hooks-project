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
import { useResource } from 'react-request-hook';

export default function App({ header }) {

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: [] })
  const { user } = state;
  const [theme, setTheme ] = useState({ primaryColor: 'blue', secondaryColor: 'purple'});

  const [ posts, getPosts ] = useResource(() => ({
    url: '/posts',
    method: 'get'
  }))
  useEffect(getPosts, [getPosts])
  useEffect(() => {
    const{ data } = posts;
    if (!!data) {
      dispatch({ type: 'FETCH_POSTS', posts: data })
    }
  }, [posts])

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
