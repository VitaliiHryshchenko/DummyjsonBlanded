import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com/recipes';

export const fetchRecepies = async () => {
  const { data } = await axios('');
  return data;
};

export const fetchRecepyById = async id => {
  const { data } = await axios(`/${id}`);
  return data;
};
