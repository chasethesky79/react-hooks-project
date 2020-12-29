import React, { useContext } from 'react';
import Logout  from './Logout';
import Login from './Login';
import Register from './Register';
import { StateContext } from '../contexts';

export default function UserBar() {

    const { state: { user } } = useContext(StateContext);

    if (user) {
        return <Logout/>
    } 
    return (<React.Fragment>
        <Login/>
        <Register/>
    </React.Fragment>)
}