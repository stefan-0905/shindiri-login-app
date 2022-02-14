import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import User, { IUser } from './api/User';

const defaultState = {
  username: '',
  firstName: '',
  lastName: '',
};

const DashboardContext = createContext<IUser>(defaultState);

export const useDashboardContext = () => useContext(DashboardContext);

const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>(defaultState);

  //Fetching user at first component render
  useEffect(() => {
    User.get()
      .then((u) => {
        setUser(u);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <DashboardContext.Provider value={user}>{children}</DashboardContext.Provider>;
};

export default DashboardProvider;
