/* eslint-disable no-console */
import axios from 'axios';

const token = localStorage.getItem('ACCESS_TOKEN') || '';

const headers = {
  'Content-Type': 'application/json',
  Authorization: token,
};

export const isAuth = async (t) => {
  if (!t && !token) return false;
  const res = await fetch(`${process.env.REACT_APP_URL_API}/auth`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: token || t,
    },
  });
  console.log('Success ', res);
  return res.ok;
};

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
    if (res?.data?.token) localStorage.setItem('ACCESS_TOKEN', res?.data.token || '');
    return res?.data;
  }).catch(({ response }) => response.data);

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
  if (res?.data?.token) localStorage.setItem('ACCESS_TOKEN', res?.data.token || '');
  return res?.data;
}).catch(({ response }) => response.data);

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
  const resutl = await fetch(`${process.env.REACT_APP_URL_API}/task/${id}/completed`, {
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
  console.log('🚀 ~ file: fetch.js ~ line 90 ~ createdTask ~ resutl', resutl);

  const json = await resutl.json();

  return json;
};
