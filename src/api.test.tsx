import Cookies from 'js-cookie';
import { login, logout } from './api/Auth';
import HttpClient from './api/HttpClient';
import { getUser } from './api/User';

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

    await login({ username: 'admin', password: 'password' });
    expect(Cookies.get('Authorization')).toBe('testtoken');
  });

  it('logout correct', async () => {
    logout();
    expect(Cookies.get('Authorization')).toBe(undefined);
  });

  it('getting user', async () => {
    jest.spyOn(HttpClient, 'request').mockResolvedValue({
      data: {
        firstName: 'abc',
        lastName: 'dasda',
      },
    });

    const user = await getUser();

    expect(user?.firstName).toBe('abc');
    expect(user?.lastName).toBe('dasda');
  });
});
