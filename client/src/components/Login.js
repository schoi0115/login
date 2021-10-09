import "../App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function Login({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const [signupForm, setSignupForm] = useState(false)
  let history = useHistory();

  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));

      } else {
        r.json().then((data) => window.alert(data.error));
     
      }
    });
  }

  function SingUphandleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        firstname: firstName,
        lastname: lastName,

      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));

        history.push("/");
      } else {
        r.json().then((data) => setErrors(data.errors));

      }
    });
  }

  function handleForm(){
      setSignupForm(!signupForm)
  }

  return (

    <div>
      <nav onClick={handleForm}>  Sign up </nav>{
          signupForm?(
      <div >
      <form onSubmit={SingUphandleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        
        <label htmlFor="firstName">First Name :</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />

        <br />

        <button className="fontbtn1" type="submit">Sign Up</button>
      </form>
    </div>
        ) : (
      <>
        <div>
        <h1 className="font">Welcome</h1>


        <div className="box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="font">Please Sign In</h3>
            <div style={{ lineHeight: "2em" }}>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password" className="passwordmargin">Password:{" "}
              </label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
            </div>
            <button type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
        <div >
        </div>
        <div >
          
          <li>Contact info: schoi0115@gmail.com Phone: 607-206-6529</li>
          <li>Phone: 607-206-6529</li>
          <li> Created by Shawn Choi </li>
         
        </div>
          </>)
      }

 
      
    </div>
    
      
   
    
          
    
  );
}
export default Login;
