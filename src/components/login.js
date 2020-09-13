import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(user==="admin" && password==="admin"){
    	sessionStorage.setItem("token", "XXXXXXXXXXX");
    	window.location.reload();
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="user" bsSize="large">
          <FormLabel>User</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeHolder="admin"
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeHolder="admin"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}