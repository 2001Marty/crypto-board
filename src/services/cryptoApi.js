import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '0122317177msh2d501a8878fc66cp19d791jsnb19631647c12'
  }

const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    
        getCryptoDetails: builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    
        // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coinmepe/${coinId}/history?tiriod=${timeperiod}`
        getCryptoHistory: builder.query({
          query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
      }),
    });
    
    export const {
      useGetCryptosQuery,
      useGetCryptoDetailsQuery,
      useGetCryptoHistoryQuery,
    } = cryptoApi;
