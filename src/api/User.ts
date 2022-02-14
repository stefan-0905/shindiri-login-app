import HttpClient from './HttpClient';

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
}

const User = Object.freeze({
  /**
   * Fetch user from API
   * @returns IUser
   */
  get: (): Promise<IUser> => {
    return new Promise((resolve, reject) => {
      HttpClient.request({
        url: '/user',
        method: 'GET',
      })
        .then((response) => response.data)
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
});

export default User;
