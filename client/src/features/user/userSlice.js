import { createSlice } from '@reduxjs/toolkit'
import SignIn from '../../routes/SignIn'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    error: null,
    loading: false
  },
  reducers: {
   signInStart: (state) => {
    state.error = null;
    state.loading = false;
   },
   signInSuccess: (state, action) => {
    state.currentUser = action.payload;
    state.error = null;
    state.loading = false;
   },
   signInFailiar: (state, action) => {
    state.loading = false;
    state.error = action.payload;
   }
  }
})

// Action creators are generated for each case reducer function
export const { signInSuccess, signInStart, signInFailiar } = userSlice.actions

export default userSlice.reducer