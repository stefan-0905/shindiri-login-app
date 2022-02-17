import HttpClient from './HttpClient';

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
}

/**
 * Fetch user from API
 * @returns IUser
 */
export const getUser = async (): Promise<IUser | null> => {
  try {
    const response = await HttpClient.request({
      url: '/user',
      method: 'GET',
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
