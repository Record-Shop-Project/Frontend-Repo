import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { MdShoppingCart } from "react-icons/md";

const Nav = () => {
  const { user, userStatus } = useContext(UserContext);

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
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
