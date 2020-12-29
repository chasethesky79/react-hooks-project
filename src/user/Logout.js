import { logoutAction } from "./user-actions";
import { StateContext } from '../contexts';
import { useContext } from 'react';

export default function Logout(){

  const { state: { user }, dispatch } = useContext(StateContext);
  const handleLogout = (evt) => {
      dispatch(logoutAction)
      evt.preventDefault();
  }
  return (
      <form onSubmit={e => e.preventDefault}>
       Logged in as: <b>{user}</b>
       <input type="submit" value="Logout" onClick={handleLogout}/>
      </form>
  )
}
