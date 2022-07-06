import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/api';

import genreOrCategoryReducer from '../features/currentGenreOrCatagory';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCatagory: genreOrCategoryReducer,
  },
});
