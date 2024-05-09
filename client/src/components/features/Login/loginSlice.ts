import { createSlice } from "@reduxjs/toolkit";


type InitialStateType = {
  username: string,
  password: string,
  favourites: string[],
  loggedIn: boolean
}

const initialState: InitialStateType = {
  username: '',
  password: '',
  favourites: [],
  loggedIn: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogin(state, action) {
      const { username, password, favourites } = action.payload
      state.username = username
      state.password = password
      state.favourites = favourites
      state.loggedIn = true
    },
    userLogout: () => initialState,
    addFavourite(state, action) {
      state.favourites.push(action.payload)
    },
    removeFavourite(state, action) {
      const val = action.payload
      const newArr = state.favourites.filter(ticker => ticker !== val)
      state.favourites = newArr
    }
  }
})

export const selectLogin = (state: any) => state.login

export const { userLogin, userLogout, addFavourite, removeFavourite } = loginSlice.actions

export default loginSlice.reducer