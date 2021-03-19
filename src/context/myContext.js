import { createContext, useState } from 'react';

export const myContext = createContext();

export const UserContextProvider = (props) => {
  const [signup, setSignup] = useState([]);
  const [loginUser, setloginUser] = useState([]);
  
  const [updateUser, setUpdateUser] = useState([])

  return (
    <myContext.Provider value={{ signup, setSignup, loginUser, setloginUser, updateUser, setUpdateUser }}>
      {props.children}
    </myContext.Provider>
  );
};