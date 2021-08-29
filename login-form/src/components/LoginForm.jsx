import React, { useState } from "react";

const LoginForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: enteredUsername,
      password: enteredPassword,
    };
      
    alert(userData.username + "\n" + userData.password);    
  };


  const resetHandler = () => {
    setEnteredUsername("");
    setEnteredPassword("");
  }

  return (
    <form className="container m-5-auto p-5 text-center bg-light w-25 card" >
      <h1 className="pb-4">Login</h1>
      <div className="mb-3">
        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
        <input
          type="text"
          className="form-control text-center"
          id="exampleInputUsername1"
          placeholder="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
      </div>
      <div className="mb-3">
        {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
        <input
          type="password"
          className="form-control text-center"
          id="exampleInputPassword1"
          placeholder="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={submitHandler}>
        login
      </button>
      <button type="submit" className="btn" onClick={resetHandler}>
        reset
      </button>
    </form>
  );
};

export default LoginForm;
