import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(false);
  const [errors, setErrors] = useState(false);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user));

      }
    });
  }, []);

  function onLogOut() {
    setUser(false);
  }
    return (
    
      <div>
      <NavBar user={user} setUser={setUser} onLogOut={onLogOut} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home 
            user={user}
            setUser={setUser}
            errors={errors}
            setErrors={setErrors}/>
          </Route>


          </Switch>
      </main>
    </div>

   
    )
}

export default App;
