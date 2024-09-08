import axios from "axios";
import {useAuthStore} from "../store/auth.ts";

const BASE_URL = 'https://api.github.com';

const client = axios.create({
  baseURL: BASE_URL
})

export const request = async ({token, options}) => {
  // Set the authorization header
  !!token && (client.defaults.headers.common.Authorization = `Bearer ${token}`);

  const onSuccess = (response) => {
    return response?.data;
  };

  const onError = (error) => {
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
