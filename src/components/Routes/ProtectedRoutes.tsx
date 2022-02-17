import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = React.lazy(() => import('../../containers/Login'));
const Main = React.lazy(() => import('../../containers/Main'));

const ProtectedRoutes = () => {
  const { isAuthenticated, handleLogin, handleLogout } = useAuth();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {isAuthenticated && <Route path="/dashboard" element={<Main handleLogout={handleLogout} />} />}
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </Suspense>
  );
};

export default ProtectedRoutes;
