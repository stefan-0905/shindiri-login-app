import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Auth, { Credentials } from '../../api/Auth';
import Cookies from 'js-cookie';
import LoginForm from './LoginForm';
import HttpClient from '../../api/HttpClient';

jest.mock('../../api/HttpClient');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('login form', () => {
  it('logins in correctly', async () => {
    jest.spyOn(HttpClient, 'request').mockResolvedValue({
      data: {
        token: 'testtoken',
      },
    });
    const attemptLogin = jest.fn((credentials: Credentials) => Auth.login(credentials));
    const { getByTestId } = render(<LoginForm attemptLogin={attemptLogin} />);
    const button = getByTestId('button-submit');

    fireEvent.change(getByTestId('username-input'), { target: { value: 'admin' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: 'password' } });

    fireEvent.click(button);
    await new Promise((r) => setTimeout(r, 2000));

    expect(Cookies.get('Authorization')).toBe('testtoken');
  });
});
