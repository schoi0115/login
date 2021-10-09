import '../App.css';
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

function NavBar({ user, onLogOut }) {
  let history = useHistory()
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then(onLogOut);

    history.push('/')
  }


  return (
      <div>
        {user ? (

          <nav className="navBar" >
            <Link to="/" > Home  </Link>

            <button onClick={handleLogoutClick}>Logout</button>
          
          </nav > 

        
          )  :  (
          
          null) }

      </div>
  );
}

export default NavBar;
