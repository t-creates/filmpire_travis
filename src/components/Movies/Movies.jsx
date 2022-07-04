import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetMoviesQuery } from '../../services/api';
import MovieList from '../MovieList/MovieList';

function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery();

  // Loading
  if (isFetching) {
    return (
      // Box = div in material ui
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  // No data - search will be added later and this will work for that as well
  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  // Error
  if (error) return 'An error has occured.';

  // Render Movies
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
