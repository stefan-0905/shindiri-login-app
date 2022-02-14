import React from 'react';
import { Credentials } from '../api/Auth';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginLayout = ({ attemptLogin }: { attemptLogin: (values: Credentials) => Promise<boolean | void> }) => {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <LoginForm attemptLogin={attemptLogin} />
    </div>
  );
};

export default LoginLayout;
