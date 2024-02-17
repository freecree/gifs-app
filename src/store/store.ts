import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gifApi } from '../services/gifService';

export const store = configureStore({
  reducer: {
    [gifApi.reducerPath]: gifApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifApi.middleware),
});

setupListeners(store.dispatch);
