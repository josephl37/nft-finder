import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const base = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}/getNFTs`

// create fetchNfts function
export const fetchNfts = createAsyncThunk('data/fetchNfts', async (address) => {
  const response = await axios.get(`${base}/?owner=${address}`)
  console.log(response);
  return response.data;
})

const initialState = {
  status: 'idle',
  data: null
}

export const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.nfts,
      };
    },
    [fetchNfts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload.ownedNfts;
    },
    [fetchNfts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchNfts.rejected]: (state) => {
      state.status = 'failed';
    },
  },
})