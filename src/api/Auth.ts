import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import HttpClient from './HttpClient';

export interface Credentials {
  username: string;
  password: string;
}

const Auth = Object.freeze({
  /**
   * Checks whether user is authenticated or not
   * @returns true if user was authenticated, false otherwise
   */
  isAuthenticated: (): boolean => {
    const token = Cookies.get('Authorization');
    if (token === undefined) {
      return false;
    }

    return true;
  },

  /**
   * Attempt to login user with provided credentials after which it saves authorization cookie
   * @param credentials username and password
   * @returns 
   */
  login: (credentials: Credentials): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      HttpClient.request({ url: '/login', method: 'POST', data: { ...credentials } })
        .then((response: AxiosResponse) => response.data.token)
        .then((token) => {
          // if (token === undefined) {
          //   resolve(false);
          // }
          Cookies.set('Authorization', token, { expires: 1 });

          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Logout user by removing Authorization cookie
   */
  logout: (): void => {
    Cookies.remove('Authorization');
  },
});

export default Auth;
