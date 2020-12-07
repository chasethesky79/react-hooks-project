export default function Logout({ user, setUser }){

  const handleLogout = (evt) => {
      setUser('')
      evt.preventDefault();
  }
  return (
      <form onSubmit={e => e.preventDefault}>
       Logged in as: <b>{user}</b>
       <input type="submit" value="Logout" onClick={handleLogout}/>
      </form>
  )
}
