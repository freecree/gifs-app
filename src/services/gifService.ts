import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGif } from '../models/IGif';

const api_key = import.meta.env.VITE_API_KEY;

export const gifApi = createApi({
  reducerPath: 'gifApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs/' }),
  endpoints: (builder) => ({
    getTrendGifs: builder.query<{ data: IGif[] }, void>({
      query: () => `trending?api_key=${api_key}`,
    }),
  }),
});

export const { useGetTrendGifsQuery } = gifApi;
