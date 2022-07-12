import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: process.env.REACT_APP_TMBD_API_KEY,
  },
});

export const fetchToken = async () => {
  try {

  } catch (error) {

  }
};
