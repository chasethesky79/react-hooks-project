import React, { useState } from 'react';
import Logout  from './Logout';
import Login from './Login';
import Register from './Register';

export default function UserBar() {
    const [user, setUser] = useState('');

    if (user) {
        return <Logout user={user} setUser={setUser}/>
    } 
    return (<React.Fragment>
        <Login setUser={setUser}/>
        <Register setUser={setUser}/>
    </React.Fragment>)
}