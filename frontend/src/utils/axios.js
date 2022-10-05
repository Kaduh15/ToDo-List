/* eslint-disable no-console */
import axios from 'axios';

export const isAuth = (token) => {
  if (!token) {
    return false;
  }

  return axios.get(axios.get(
    `${process.env.REACT_APP_URL_API}/auth`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    },
  )).then(() => true)
    .catch(() => false);
};

export const login = ({ email, password }) => axios.post(
  `${process.env.REACT_APP_URL_API}/login`,
  {
    email,
    password,
  },
  {
    headers: { 'Content-Type': 'application/json' },
  },
).then((res) => {
  localStorage.setItem('ACCESS_TOKEN', res.data.token);
});

export const register = ({ email, password, name }) => axios.post(
  `${process.env.REACT_APP_URL_API}/user`,
  {
    name,
    email,
    password,
  },
  {
    headers: { 'Content-Type': 'application/json' },
  },
);

export const getUser = (token) => {
  if (!token) {
    return false;
  }

  return axios.get(axios.get(
    `${process.env.REACT_APP_URL_API}/user`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    },
  )).then(() => true)
    .catch(() => false);
};
