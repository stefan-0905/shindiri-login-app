import Cookies from 'js-cookie';
import Auth from './api/Auth';
import HttpClient from './api/HttpClient';
import User from './api/User';

jest.mock('./api/HttpClient');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('api calls', () => {
  it('login correct', async () => {
    jest.spyOn(HttpClient, 'request').mockResolvedValue({
      data: {
        token: 'testtoken',
      },
    });

    await Auth.login({ username: 'admin', password: 'password' });
    expect(Cookies.get('Authorization')).toBe('testtoken');
  });

  it('logout correct', async () => {
    Auth.logout();
    expect(Cookies.get('Authorization')).toBe(undefined);
  });

  it('getting user', async () => {
    jest.spyOn(HttpClient, 'request').mockResolvedValue({
      data: {
        firstName: 'abc',
        lastName: 'dasda',
      },
    });

    const user = await User.get();

    expect(user.firstName).toBe('abc');
    expect(user.lastName).toBe('dasda');
  });
});
