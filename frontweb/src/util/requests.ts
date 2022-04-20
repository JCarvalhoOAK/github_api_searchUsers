import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {
  username: string;
  password: string;
};

// export const BASE_API_GIT_URL =
//   process.env.PUBLIC_URL?? 'https://api.github.com';

//  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'a7c10016b82fb29a';
//  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? '76be7ac8cff3243d5f798b1506246600c7395974';

// };

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};

// export const requestBackend = (config: AxiosRequestConfig) => {
//   const headers = config.withCredentials
//     ? {
//         ...config.headers,
//         Authorization: 'Bearer ' + getAuthData().access_token,
//       }
//     : config.headers;

//   return axios({ ...config, baseURL: BASE_URL, headers });
// };

export const requestGit = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
      }
    : config.headers;

  return axios({ ...config, baseURL: "https://api.github.com/users", headers });
};

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    //
    return config;
  },
  function (error) {
    //
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    //
    return response;
  },
  function (error) {
 
    return Promise.reject(error);
  }
);
