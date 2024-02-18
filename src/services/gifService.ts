import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGif } from '../models/IGif';

const api_key = import.meta.env.VITE_API_KEY;

export const gifApi = createApi({
  reducerPath: 'gifApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs/' }),
  endpoints: (builder) => ({
    getTrendGifs: builder.query<{ data: IGif[] }, number>({
      query: (page: number) =>
        `trending?api_key=${api_key}&offset=${page * 20}&limit=20`,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCachedGifs, newGifs) => {
        currentCachedGifs.data.push(...newGifs.data);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetTrendGifsQuery } = gifApi;
