import React, { useState } from 'react';
import { loginAction } from './user-actions';

export default function Login({dispatch}) {

    const [userName, setUserName] = useState('');
    const handleOnChange = ({target: { value }}) => {
      setUserName(value);
    }

    const handleFormSubmit = (evt) => {
      evt.preventDefault();
      dispatch(loginAction(userName))
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" value={userName} name="login-username" id="login-username" onChange={handleOnChange}/>

            <label htmlFor="login-password">Password:</label>
            <input type="text" name="login-password" id="login-password"/>

            <input type="submit" value="Login" disabled={!userName}/>
        </form>
    )
}