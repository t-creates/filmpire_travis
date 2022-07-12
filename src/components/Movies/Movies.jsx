import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/api';
import MovieList from '../MovieList/MovieList';
import { selectGenreOrCategory } from '../../features/currentGenreOrCatagory';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCatagory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

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
};

export default Movies;
