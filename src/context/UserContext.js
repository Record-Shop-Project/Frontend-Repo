import { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../helpers/apiCalls';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [records, setRecords] = useState([]);
  const [userStatus, setUserStatus] = useState(false);
  const [authDone, setAuthDone] = useState(false);

  useEffect(() => {
    console.log('Context is rendering');
    const authMe = async () => {
      try {
        const result = await authenticateUser();
        if (result.error) {
          // clearUserInStorage()
          setUser();
          setAuthDone(true)
          return
        }

        setUser(result);
        setAuthDone(true);
      } catch (error) {}
    };

    authMe();
  }, []); // wil

  return (
    <UserContext.Provider
      value={{ user, setUser, records, setRecords, userStatus, setUserStatus, authDone, setAuthDone }}
    >
      {props.children}
    </UserContext.Provider>
  );
};