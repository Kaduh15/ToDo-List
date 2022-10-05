/* eslint-disable no-console */
import axios from 'axios';

export const isAuth = (token) => {
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
  console.log('🚀 ~ file: axios.js ~ line 33 ~ ).then ~ res.data.token', res.data.token);
})
  .catch(() => false);

export const getTasks = () => {};
