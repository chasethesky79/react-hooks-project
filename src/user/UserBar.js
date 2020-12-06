import React from 'react';
import Logout  from './Logout';
import Login from './Login';
import Register from './Register';

export default function UserBar() {
    const user = '';
    if (user) {
        return <Logout user={user}/>
    } 
    return <React.Fragment>
        <Login/>
        <Register/>
    </React.Fragment>
}