import React from 'react';
import Logout  from './Logout';
import Login from './Login';
import Register from './Register';

export default function UserBar({user, dispatch}) {

    if (user) {
        return <Logout user={user} dispatch={dispatch}/>
    } 
    return (<React.Fragment>
        <Login dispatch={dispatch}/>
        <Register dispatch={dispatch}/>
    </React.Fragment>)
}