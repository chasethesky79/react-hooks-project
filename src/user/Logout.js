import { logoutAction } from "./user-actions";

export default function Logout({ user, dispatch }){

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
