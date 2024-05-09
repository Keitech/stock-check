import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const TICKER_URL = '/search_ticker'

type InitialTickerType = {
  data: {},
  status: string,
  error: any,
}

const initialState: InitialTickerType = {
  data: {},
  status: 'idle',
  error: null
}

export const fetchTicker = createAsyncThunk('ticker/fetchTicker', async (tickerName: string) => {
  const data = { ticker: tickerName }
  const response = await axios.post(TICKER_URL, data)
  return response.data
})

const tickerSlice = createSlice({
  name: 'ticker',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchTicker.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTicker.fulfilled, (state, action) => {
        state.status = 'succeeded'

        // Add any fetched posts to the array
        state.data = action.payload
      })
      .addCase(fetchTicker.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllTickerInfo = (state: any) => state.ticker.data
export const tickerStatus = (state: any) => state.ticker.status

export default tickerSlice.reducer
