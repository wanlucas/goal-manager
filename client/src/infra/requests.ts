import axios from 'axios';

export const formatQuery = (query: object = {}): string => {
  return Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
};

export const get = async (url: string, query: any): Promise<any>  => {
  const response = await axios.get(`${url}${formatQuery(query)}`);

  return response.data;
};

export const post = async (url: string, body: any): Promise<any> => {
  const response = await axios.post(url, body);

  return response.data;
};

export const put = async (url: string, body: any): Promise<any> => {
  const response = await axios.put(url, body);

  return response.data;
};

export const remome = async (url: string): Promise<any> => {
  const response = await axios.delete(url);

  return response.data;
};