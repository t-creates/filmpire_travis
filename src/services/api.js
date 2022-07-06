import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const apiKey = process.env.REACT_APP_TMBD_API_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    // Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${apiKey}`,
    }),
    // Get Movies by [type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // Get Movies By Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${apiKey}`;
        }

        // Get Movies By Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${apiKey}`;
        }

        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=${apiKey}`;
      },
    }),
  }),
});

export const {
  useGetMoviesQuery, useGetGenresQuery,
} = tmdbApi;
