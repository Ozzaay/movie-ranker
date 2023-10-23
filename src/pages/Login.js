import "../../BigBOI.css";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();

    const login = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const loginResponse = await login.json();
    try {
      if (
        email === loginResponse.rows[0].email &&
        password === loginResponse.rows[0].password 
      ) {
        alert("Login Successful");
        navigate("/app", { state: { id: loginResponse.rows[0].id } });
      } 
       else {
        alert("Login Failed");
      }
    } catch (error) {
      alert("Login Failed");
    }
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (    
        <form className="login-form">
          <label>Login</label>
          <input onChange={handleEmail} placeholder="Email"></input>
          <input onChange={handlePassword} placeholder="Password" type="password"></input>
          <button onClick={handleLogin} type="submit">
            Submit 
          </button>
        </form>
      // </div>
    
  );
};

export default Login;
