import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/api';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
