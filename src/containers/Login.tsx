import React from 'react';
import { Credentials } from '../api/Auth';
import LoginForm from '../components/LoginForm/LoginForm';

interface ILogin {
  handleLogin: (values: Credentials) => Promise<void>;
}

const Login = ({ handleLogin }: ILogin) => {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
