import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { nftSlice } from './slices/nftSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      nfts: nftSlice.reducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);