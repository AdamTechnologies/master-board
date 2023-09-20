// src/slices/userSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserData, fetchYearlyRafleIdData, userLoginData } from './userActions';

export interface UserState {
  user: {
    name: string;
    email: string;
  } | null;
  loading: boolean;
  error: string | undefined | null;
  tickets: [];  
  yearlyTickets: [];
  userDetails: [];

}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  tickets: [],
  yearlyTickets: [],
  userDetails: [],

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.tickets = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchYearlyRafleIdData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYearlyRafleIdData.fulfilled, (state, action) => {
        state.yearlyTickets = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchYearlyRafleIdData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userLoginData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLoginData.fulfilled, (state, action) => {
        state.userDetails = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(userLoginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
