import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const apiKey = process.env.REACT_APP_TMBD_API_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    // Get Movies by [type]
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${apiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
} = tmdbApi;
