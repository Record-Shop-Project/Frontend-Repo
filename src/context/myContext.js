import { createContext, useState } from "react";

export const myContext = createContext();

export const UserContextProvider = (props) => {
  const [signup, setSignup] = useState([]);
  const [loginUser, setloginUser] = useState({});
  const [userStatus, setUserStatus] = useState(false);
  const [error, setError] = useState(false);

  const [updateUser, setUpdateUser] = useState([]);

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
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
