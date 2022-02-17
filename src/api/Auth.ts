import Cookies from 'js-cookie';
import HttpClient from './HttpClient';

export interface Credentials {
  username: string;
  password: string;
}

/**
 * Checks whether user is authenticated or not
 * @returns true if user was authenticated, false otherwise
 */
export const isLoggedIn = (): boolean => {
  const token = Cookies.get('Authorization');
  return !!token;
};

/**
 * Attempt to login user with provided credentials after which it saves authorization cookie
 * @param credentials username and password
 * @returns
 */
export const login = async (credentials: Credentials): Promise<void> => {
  const response = await HttpClient.request({ url: '/login', method: 'POST', data: { ...credentials } });
  Cookies.set('Authorization', response.data.token, { expires: 1 });
};

/**
 * Logout user by removing Authorization cookie
 */
export const logout = (): void => {
  Cookies.remove('Authorization');
};
