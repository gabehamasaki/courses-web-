import type { AstroCookies } from "astro";
import axios from "axios";

export const useApi = (cookies?: AstroCookies) => {
  const api = axios.create({
    baseURL: import.meta.env.PUBLIC_API_URL,
  });

  api.defaults.headers.common['Content-Type'] = 'application/json';

  if (cookies && cookies.has(import.meta.env.PUBLIC_TOKEN_NAME)) {
    api.defaults.headers.common['Authorization'] = `Bearer ${cookies.get(import.meta.env.PUBLIC_TOKEN_NAME)}`;
  }

  return api;
}