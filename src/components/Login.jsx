import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import logIn from "../images/logIn.png";
import { addLoginData } from "../helpers/apiCall";
import { useHistory } from "react-router-dom";
import { myContext } from "../context/myContext";
import "../css/form.css"

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(myContext);
  const { loginUser, setloginUser, userStatus, setUserStatus, error, setError } = context;


  const onSubmit = async (data) => {
    const newData = await addLoginData(data);
    if (newData.error) {
      setError(true);
    } else {
      setUserStatus(true)
      setloginUser(newData.data);
      history.push("/store");

    }
  };

  console.log("userStatus=>", userStatus);

  return (
    <div className="login-wrapper">
      <div>
        <h2>Welcome back!!</h2>
        {error && <h1 style={{ color: "red" }}>Login Error </h1>}
        <h3>Please fill in your credentials.</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="myForm">
          <h1>Login</h1>
          <input
            type="text"
            name="email"
            ref={register({ required: true })}
            placeholder="Email"
          />
          {errors.email && <p>please provide your valid email!</p>}
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder="Password"
          />
          {errors.password && <p>please provide your password!</p>}

          <button>Log in</button>
          <span>
            You don’t have an account? Create one{" "}
            <a onClick={() => history.push("/store")}>here</a>
          </span>
        </form>
      </div>

      <div className="logo-img">
        <img src={logIn} alt={logIn} />
      </div>
    </div>
  );
};

export default Login;
