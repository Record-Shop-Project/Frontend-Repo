import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { MdShoppingCart } from "react-icons/md";
import { logOutUser } from "../helpers/apiCalls";

const Nav = () => {
  const { user, setUser, setUserStatus, userStatus, setAuthDone } = useContext(
    UserContext
  );
  const history = useHistory();

  const handleLogout = () => {
    setUser(); // clear user / shutdown login session
    setUserStatus(false);
    setAuthDone(true); // reset the auth process hook
    logOutUser(); // log out user at API - by clearing cookie...
    history.push("/login");
  };

  return (
    <nav>
      <ul>
        <div className="logo">
          <NavLink exact to={userStatus ? "/dashboard" : "/"}>
            <p>RECORD STORE</p>
          </NavLink>
        </div>
        <div className="items">
          {!userStatus && (
            <>
              <NavLink exact activeClassName="selected" to="/login">
                <p>Login</p>
              </NavLink>
              <NavLink
                exact
                to="/signup"
                activeClassName="selected"
                className="button-bg"
              >
                <p>Sign Up</p>
              </NavLink>
            </>
          )}

          {userStatus && (
            <>
              <NavLink to="/cart">
                <MdShoppingCart />
              </NavLink>
              <NavLink
                className="avatar"
                activeClassName="selected"
                exact
                to="/profile"
              >
                <img src={user.avatar}></img>
              </NavLink>
              <button onClick={handleLogout}>log out</button>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
