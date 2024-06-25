import api from '@/services/apis';

const useFetch = async (endpoint: string, init?: RequestInit) => {
  // return fetch(`${process.env.NEXTAUTH_URL}/api/${endpoint}`, init);
  return fetch(`https://jsonplaceholder.typicode.com/users/${endpoint}`);
};

export { api, useFetch };
