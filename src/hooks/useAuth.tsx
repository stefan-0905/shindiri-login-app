import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth, { Credentials } from '../api/Auth';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const attemptLogin = (values: Credentials): Promise<boolean | void> => {
    return Auth.login(values).then((success: boolean) => {
      setIsAuthenticated(true);
    })
  };

  const attemptLogout = () => {
    Auth.logout();
    setIsAuthenticated(false);
  };

  //Initial auth state, if cookie exists => true
  useEffect(() => {
    setIsAuthenticated(Auth.isAuthenticated());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated]);

  return { isAuthenticated, attemptLogin, attemptLogout };
};

export default useAuth;
