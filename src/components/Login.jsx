import React, {useState, useContext } from "react";
import { useForm } from "react-hook-form";
import logIn from "../images/logIn.png";
import { addLoginData } from "../helpers/apiCall";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { myContext } from "../context/myContext";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(myContext);
  const { user, setUser } = context;
const [error, setError] = useState(false)


  const onSubmit = async (data) => {
    const newData = await addLoginData(data);
    if (newData.error) {
      setError(true);
    } else {
      setUser([...user, newData.data]);
      history.push("/home");
    }
    // return newData
  };

  return (
    <div className="login-wrapper">
      <div>
        <h2>Welcome back!!</h2>
{error && <h1 style ={{color:'red'}}>Login Error </h1>}
        <h3>Please fill in your credentials.</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <a onClick={() => history.push("/login")}>>here</a>
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
