import React, { useState } from 'react';

export default function Register({setUser}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleUserNameChange = ({target: { value }}) => {
        setUserName(value);
    }

    const handlePasswordChange = ({target: { value }}) => {
        setPassword(value);
    }

    const handleRepeatPasswordChange = ({target: { value }}) => {
        setRepeatPassword(value);
    }

    const handleFormSubmit = (evt) => {
        if (password !== repeatPassword) {
            return;
        }
        setUser(userName);
        evt.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" value ={userName} id="register-username" onChange={handleUserNameChange}/>

            <label htmlFor="register-password">Password:</label>
            <input type="text" name="register-password" value={password} id="register-password" onChange={handlePasswordChange}/>

            <label htmlFor="register-repeat-password">Repeat Password:</label>
            <input type="text" name="register-repeat-password" value={repeatPassword} id="register-repeat-password" onChange={handleRepeatPasswordChange}/>

            <input type="submit" value="Register" disabled={!userName || (password !== repeatPassword)}/>
        </form>
    )
}