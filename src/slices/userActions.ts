import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGU0NGIzMWNiYzI4ZmU2MWEwZmQwNWIiLCJlbWFpbCI6IjIwMDRhYWRpdGhAZ21haWwuY29tIiwiYWNjZXNzX3Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZMFpUTXlaV0kwWkRka05UWXdNekEyTmpjd1pXWTVaaUlzSW1WdFlXbHNJam9pTWpBd05HRmhaR2wwYUVCbmJXRnBiQzVqYjIwaUxDSnBibVp2SWpwN0luSnZiR1VpT2lJMk5HSXhZemxpTXpReU56WmhZamN6TkRCaVpXUmpPVFVpZlN3aWFXRjBJam94TmprME5ERXhPRGc0TENKbGVIQWlPakUzTWpVNU5EYzRPRGg5LlpZQndIbHVEbnA2eG9TeTV6N194S1dZZmdieXpFX3RMUjlCSmhsdFJRUVkiLCJpYXQiOjE2OTQ0MTE4ODh9.HFJABSeOz5tKJicZAlgpQjd3b0EvjVmPUn5Yrh_0loE'; // Replace with your actual token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get('http://3.6.123.80:3001/api/tickets/get-numbers', { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

export const fetchYearlyRafleIdData = createAsyncThunk('user/fetchYearlyRafleIdData', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGU0NGIzMWNiYzI4ZmU2MWEwZmQwNWIiLCJlbWFpbCI6IjIwMDRhYWRpdGhAZ21haWwuY29tIiwiYWNjZXNzX3Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZMFpUTXlaV0kwWkRka05UWXdNekEyTmpjd1pXWTVaaUlzSW1WdFlXbHNJam9pTWpBd05HRmhaR2wwYUVCbmJXRnBiQzVqYjIwaUxDSnBibVp2SWpwN0luSnZiR1VpT2lJMk5HSXhZemxpTXpReU56WmhZamN6TkRCaVpXUmpPVFVpZlN3aWFXRjBJam94TmprME5ERXhPRGc0TENKbGVIQWlPakUzTWpVNU5EYzRPRGg5LlpZQndIbHVEbnA2eG9TeTV6N194S1dZZmdieXpFX3RMUjlCSmhsdFJRUVkiLCJpYXQiOjE2OTQ0MTE4ODh9.HFJABSeOz5tKJicZAlgpQjd3b0EvjVmPUn5Yrh_0loE'; // Replace with your actual token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get('http://3.6.123.80:3001/api/tickets/get-yearly-number', { headers });
    console.log('response', response);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});


export const userLoginData = createAsyncThunk('user/userLoginData', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post('http://13.234.42.189:3001/api/auth/signin', { email, password });
    console.log('response...........', response.data.data.access_token);
    
    const accessToken = response.data.data.access_token;
    
    // Save the access token to local storage
    localStorage.setItem('access_token', accessToken);

    return accessToken;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

