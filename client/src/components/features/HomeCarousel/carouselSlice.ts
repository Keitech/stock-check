import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const CAROUSEL_URL = '/account'

type InitialStateType = {
  data: [],
  status: string,
  error: any
}

const initialState: InitialStateType = {
  data: [],
  status: 'idle',
  error: null
}

export const fetchCarousel = createAsyncThunk('carousel/fetchCarousel', async () => {
  const response = await axios.get(CAROUSEL_URL)
  return response.data
})

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchCarousel.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCarousel.fulfilled, (state, action) => {
        state.status = 'succeeded'

        // Add any fetched posts to the array
        state.data = action.payload
      })
      .addCase(fetchCarousel.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllCarousel = (state:any) => state.carousel.data
export const getCarouselStatus = (state:any) => state.carousel.status

export default carouselSlice.reducer