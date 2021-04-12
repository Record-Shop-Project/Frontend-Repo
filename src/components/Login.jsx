import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { Redirect, useHistory } from "react-router-dom";
import lemmy from "../statics/lemmy.jpeg";
import { loginUser } from "../helpers/apiCalls";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const { setUser, setUserStatus, userStatus } = useContext(UserContext);

  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await loginUser(data);
    if (!res.error) {
      setUser(res.data);
      setUserStatus(true);
      console.log("newdata.data", newData.data);
      setloginUser(newData.data);
      history.push("/store");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-text-wrapper">
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
