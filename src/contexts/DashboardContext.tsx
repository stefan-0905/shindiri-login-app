import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getUser, IUser } from '../api/User';

const defaultState = {
  username: '',
  firstName: '',
  lastName: '',
};

const DashboardContext = createContext<IUser>(defaultState);

export const useDashboardContext = () => useContext(DashboardContext);

interface IDashboardProvider {
  children: ReactNode;
}

const DashboardProvider = ({ children }: IDashboardProvider) => {
  const [user, setUser] = useState<IUser>(defaultState);

  //Fetching user at first component render
  useEffect(() => {
    (async () => {
      try {
        const user = await getUser();
        if (user) {
          setUser(user);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  return <DashboardContext.Provider value={user}>{children}</DashboardContext.Provider>;
};

export default DashboardProvider;
