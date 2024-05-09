import { createSlice } from "@reduxjs/toolkit";

const profileData = [
  { 'username': 'test', 'password': '12345', 'favourites': ['MSFT', 'AAPL', 'SQ'] }
]

type InitialStateType = {
  data: { 'username': string, 'password': string, 'favourites': string[] }[],
}

const initialState: InitialStateType = {
  data: profileData,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    createProfile(state, action) {
      const { username, password } = action.payload
      const newUser = {
        username: username,
        password: password,
        favourites: []
      }
      state.data.push(newUser)
    },
    updateFavourites(state, action) {
      const { username, favourites} = action.payload
      const newState = state.data.map(profile =>
        profile.username === username ? { ...profile, favourites: favourites } : profile
      );
      state.data = newState
    }
  }
})

export const selectProfiles = (state: any) => state.profile.data

export const { createProfile, updateFavourites } = profileSlice.actions

export default profileSlice.reducer