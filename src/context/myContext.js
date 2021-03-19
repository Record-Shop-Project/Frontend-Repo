import { createContext, useState } from 'react';

export const myContext = createContext();

export const UserContextProvider = (props) => {
  const [signup, setSignup] = useState([]);
  const [user, setUser] = useState([]);
  const [updateUser, setUpdateUser] = useState([])

  return (
    <myContext.Provider value={{ signup, setSignup, user, setUser, updateUser, setUpdateUser }}>
      {props.children}
    </myContext.Provider>
  );
};