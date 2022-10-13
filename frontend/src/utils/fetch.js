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
    return res.ok;
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
    console.log('🚀 ~ file: fetch.js ~ line 39 ~ .then ~ res', res);
    localStorage.setItem('ACCESS_TOKEN', res?.data.token);
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
).then((res) => {
  localStorage.setItem('ACCESS_TOKEN', res?.data.token);
});

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

export const completedTask = async (id) => {
  const resutl = await fetch(`${process.env.REACT_APP_URL_API}/task/completed/${id}`, {
    method: 'PUT',
    headers,
  });

  const json = await resutl.json();

  return json;
};

export const createdTask = async ({ nameTask, description }) => {
  const resutl = await fetch(`${process.env.REACT_APP_URL_API}/task`, {
    method: 'POST',
    body: JSON.stringify({ nameTask, description }),
    headers,
  });

  const json = await resutl.json();

  return json;
};
