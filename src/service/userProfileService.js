import Axios from 'axios';

export const HttpService = Axios.create({
    baseURL: 'https://reqres.in/api/users',
    timeout: 10000,
  });


export async function fetchAllUsers(queryParams) {
    try {
      const response = await HttpService.get(queryParams);
      return response;
    } catch (err) {
      return {err};
    }
  }
  
export async function fetchUser(queryParams) {
    try {
      const response = await HttpService.get(queryParams);
      return response;
    } catch (err) {
      return {err};
    }
}
  