import { createContext, useState, useEffect, useReducer } from "react";
import { authenticateUser } from "../helpers/apiCall";
import { loadUserFromStorage } from "../helpers/localStorage";

export const myContext = createContext();

export const UserContextProvider = (props) => {
  const [signup, setSignup] = useState([]);
  const [loginUser, setloginUser] = useState(loadUserFromStorage());

  const [userStatus, setUserStatus] = useState(false);
  const [error, setError] = useState(false);
  const [updateUser, setUpdateUser] = useState([]);

  // this gets executed BEFORE first render
  const [user, setUser] = useState(); // load login info on STARTUP (before rendering)

  const [authIsDone, setAuthIsDone] = useState(false);

  // const [basket, dispatch] = useReducer(basketReducer);

  //last thing to get executed (after all components have been rendered already)
  useEffect(() => {
    console.log("Context is trying to authenticate the user");
    const authMe = async () => {
      try {
        // /me
        const result = await authenticateUser();
        console.log("result", result);
        if (result.error) {
          setloginUser();
          setAuthIsDone(true);
          setUserStatus(false);
          return;
        }

        // setloginUser(result);
        setAuthIsDone(true);
        setUserStatus(true);
      } catch (error) {}
    };

    authMe();
  }, []); // will executed AFTER first render

  return (
    <myContext.Provider
      value={{
        signup,
        setSignup,
        loginUser,
        setloginUser,
        updateUser,
        setUpdateUser,
        userStatus,
        setUserStatus,
        error,
        setError,
        authIsDone,
        setAuthIsDone,
        user,
        setUser,
        // basket,
        // dispatch,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
