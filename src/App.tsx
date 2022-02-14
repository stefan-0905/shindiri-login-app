import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import useAuth from './hooks/useAuth';

const LoginLayout = React.lazy(() => import('./layouts/LoginLayout'));
const MainLayout = React.lazy(() => import('./layouts/MainLayout'));

function App() {
  const { isAuthenticated, attemptLogin, attemptLogout } = useAuth();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {isAuthenticated && <Route path="/dashboard" element={<MainLayout attemptLogout={attemptLogout} />} />}
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginLayout attemptLogin={attemptLogin} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
