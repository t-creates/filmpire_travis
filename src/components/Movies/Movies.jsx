import React from 'react';
import { useGetMoviesQuery } from '../../services/api';

function Movies() {
  const { data } = useGetMoviesQuery();
  console.log(data);

  return (
    <div>Movies</div>
  );
}

export default Movies;
