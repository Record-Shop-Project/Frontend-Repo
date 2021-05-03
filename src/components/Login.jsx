import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import logIn from "../images/logIn.png";
import { addLoginData, googleLoginUser } from "../helpers/apiCall";
import { useHistory } from "react-router-dom";
import { myContext } from "../context/myContext";
import { setUserInStorage } from "../helpers/localStorage"
  ;
import { GoogleLogin } from 'react-google-login';
import "../css/form.css";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(myContext);

  const {
    loginUser,
    setloginUser,
    userStatus,
    setUserStatus,
    error,
    setError,
    setUser
  } = context;

  const onSubmit = async (data) => {
    const newData = await addLoginData(data);

    if (newData.error) {
      setError(true);
    } else {
      console.log("newdata.data", newData.data);
      setloginUser(newData.data);
      setUserInStorage(newData.data)
      setUserStatus(true);
      history.push("/store");
    }
  };

  const responseGoogle = async (response) => {
    console.log("response", response); // response is coming from google
    // inside the response i have profileObj and inside there I have all of my dada
    const { email, familyName, givenName, googleId } = response.profileObj;
    const data = {
      email,
      googleId,
      firstName: givenName,
      lastName: familyName,
    };

    let result = await googleLoginUser(data);

    if (result.error) {
      return setError(result.error); // forward API error to our central context
    }

    // handle success case
    setloginUser(result);
    setUserInStorage(result)
    setUserStatus(true);
    history.push("/store");
  };

  return (
    <div className="login-wrapper">
      <div className="login-text-wrapper">
        <h2>Welcome back!!</h2>
        {error && <h1 style={{ color: "red" }}>Login Error </h1>}
        <h3>Please fill in your credentials.</h3>
        {/* this is coming from import { GoogleLogin } from 'react-google-login'.(documention) */}
        <GoogleLogin
          clientId='506337378250-qfh9nvnvcsabbopleft6dro5d98p032p.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
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

          <button className="login-btn">Log in</button>
          <div>
            <p>
              You don’t have an account? Create one{" "}
              <a onClick={() => history.push("/signup")}>here</a>
            </p>
          </div>
        </form>
      </div>

      <div className="logo-img">
        <img className="login-img" src={logIn} alt={logIn} />
      </div>
    </div>
  );
};

export default Login;
