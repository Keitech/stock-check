import { configureStore } from '@reduxjs/toolkit'
import carouselReducer from '../components/features/HomeCarousel/carouselSlice'
import tickerReducer from '../components/features/SearchTicker/tickerSlice'
import profileReducer from '../components/features/Profile/profileSlice'
import loginReducer from '../components/features/Login/loginSlice'

export default configureStore({
  reducer: {
    carousel: carouselReducer,
    ticker: tickerReducer,
    profile: profileReducer,
    login: loginReducer,
  }
})