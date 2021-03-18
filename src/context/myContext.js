import { createContext, useState } from 'react';

export const myContext = createContext();

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <myContext.Provider value={{ users, setUsers, user, setUser }}>
      {props.children}
    </myContext.Provider>
  );
};