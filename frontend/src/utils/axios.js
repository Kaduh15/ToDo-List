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
  localStorage.setItem('ACESS_TOKEN', res.data.token);
  return true;
})
  .catch(() => false);

export const getTasks = () => {};
