import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import DashboardProvider from '../contexts/DashboardContext';

interface IMain {
  handleLogout: () => void;
}

const Main = ({ handleLogout }: IMain) => {
  return (
    <DashboardProvider>
      <header>
        <Navigation handleLogout={handleLogout} />
      </header>
      <main></main>
    </DashboardProvider>
  );
};

export default Main;
