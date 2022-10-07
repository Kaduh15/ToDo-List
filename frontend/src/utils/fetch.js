/* eslint-disable no-console */
import axios from 'axios';
import useStorage from './useStorage';

const [token] = useStorage('ACCESS_TOKEN');

const headers = {
  'Content-Type': 'application/json',
  Authorization: token,
};

export const isAuth = () => fetch(`${process.env.REACT_APP_URL_API}/auth`, {
  method: 'GET',
  headers,
})
  .then((res) => {
    console.log('Success ', res);
    return res.statusText;
  })
  .catch(() => {
    console.log('Error');
    return false;
  });

export const login = ({ email, password }) => axios
  .post(
    `${process.env.REACT_APP_URL_API}/login`,
    {
      email,
      password,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )
  .then((res) => {
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

export const getUser = async () => {
  const resutl = await fetch(`${process.env.REACT_APP_URL_API}/user`, {
    method: 'GET',
    headers,
  });

  return resutl.json();
};

export const deleteTask = async (id) => {
  const resutl = await fetch(`${process.env.REACT_APP_URL_API}/task/${id}`, {
    method: 'DELETE',
    headers,
  });

  return resutl.json();
};
