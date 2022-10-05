/* eslint-disable no-console */
import axios from 'axios';

export const isAuth = (token) => {
  if (!token) {
    return false;
  }

  return axios.get(
    `${process.env.REACT_APP_URL_API}/auth`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(() => {
    console.log('Success');
    return true;
  })
    .catch(() => {
      console.log('Error');
      return false;
    });
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

export const getUser = async (token) => {
  const resutl = await axios.get(
    `${process.env.REACT_APP_URL_API}/user`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    },
  );
  return resutl;
};
