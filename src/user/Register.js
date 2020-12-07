import React from 'react';

export default function Register({setUser}) {
    const handleOnRegister = (evt) => {
        setUser('Daniel Blog');
    }
    
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" id="register-username"/>

            <label htmlFor="register-password">Password:</label>
            <input type="text" name="register-password" id="register-password"/>

            <label htmlFor="register-repeat-password">Repeat Password:</label>
            <input type="text" name="register-repeat-password" id="register-repeat-password"/>

            <input type="submit" value="Register" onClick={handleOnRegister}/>
        </form>
    )
}