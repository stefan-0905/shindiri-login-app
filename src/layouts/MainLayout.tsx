import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import DashboardProvider from '../DashboardContext';

const MainLayout = ({ attemptLogout }: { attemptLogout: () => void }) => {
  return (
    <DashboardProvider>
      <header>
        <Navigation attemptLogout={attemptLogout} />
      </header>
      <main>
      </main>
    </DashboardProvider>
  );
};

export default MainLayout;
