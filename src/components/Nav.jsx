import React, { useContext } from "react";
import { myContext } from "../context/myContext";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  const context = useContext(myContext);
  const { userStatus, loginUser } = context;
  let { id } = useParams();
  const history = useHistory();

  const fetchLoginData = () => {
    history.push(`/profile/${loginUser._id}`);
    // loginUser.id
  };

  return (
    <div className="nav-wrapper">
      <div className="hero-wrapper">
        <h1>Record Store</h1>
      </div>
      {!userStatus && (
        <div className="btn-wrapper">
          <Link to="/login">
            <button className="nav-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="nav-btn">Sign up</button>
          </Link>
        </div>
      )}
      {userStatus && (
        <div onClick={fetchLoginData}>
          <img
            className="avatar-link"
            src={loginUser.avatar}
            alt="Your avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
