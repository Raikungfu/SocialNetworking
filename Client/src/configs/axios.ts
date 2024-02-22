import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from './configURL';
import Axios from './interceptors'

interface AxiosApiResponse<T> {
  data: T | null;
  error: string | null;
}

const api = axios.create({
  baseURL: API_BASE_URL,
});

const AxiosApi = {
  get: async <T>(url: string, isAuthorized: boolean,  params?: any): Promise<AxiosApiResponse<T>> => {
    try {
      const response = isAuthorized ? await Axios.get<T>(url, { params }) : await api.get<T>(url, { params });
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: (error as AxiosError).message };
    }
  },

  post: async <T>(url: string, isAuthorized: boolean, data: any): Promise<AxiosApiResponse<T>> => {
    try {
      const response = isAuthorized ? await Axios.post<T>(url, data) : await api.post<T>(url, data);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: (error as AxiosError).message };
    }
  },

  put: async <T>(url: string, isAuthorized: boolean, data: any): Promise<AxiosApiResponse<T>> => {
    try {
      const response = isAuthorized ? await Axios.put<T>(url, data) : await api.put<T>(url, data);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: (error as AxiosError).message };
    }
  },

  delete: async <T>(url: string, isAuthorized: boolean): Promise<AxiosApiResponse<T>> => {
    try {
      const response = isAuthorized ? await Axios.delete<T>(url) : await api.delete<T>(url);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: (error as AxiosError).message };
    }
  },
};

export default AxiosApi;
