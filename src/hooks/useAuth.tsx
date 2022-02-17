import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Credentials, login, logout, isLoggedIn } from '../api/Auth';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (values: Credentials) => {
    try {
      await login(values);
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  //Initial auth state, if cookie exists => true
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated]);

  return { isAuthenticated, handleLogin, handleLogout };
};

export default useAuth;
