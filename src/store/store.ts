import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gifApi } from '../services/gifService';
import animationReducer from '../slices/animationSlice';

export const store = configureStore({
  reducer: {
    [gifApi.reducerPath]: gifApi.reducer,
    animation: animationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
