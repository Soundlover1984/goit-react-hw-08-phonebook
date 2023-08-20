import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from 'utils/notifySettings';

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  const unsetToken = () => {
    axios.defaults.headers.common.Authorization = '';
  };


  export const fetchCurrentUser = createAsyncThunk(
    'auth/fetchCurrentUser',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const currentToken = state.auth.token;
      if (currentToken === null) {
        return thunkAPI.rejectWithValue();
      }
      setToken(currentToken);
      try {
        const { data } = await axios.get(`/users/current`);
        return data;
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`, notifySettings);
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
      try {
        const { data } = await axios.post('/users/signup', userData);
        setToken(data.token);
        return data;
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`, notifySettings);
        return thunkAPI.rejectWithValue(error.request.status);
      }
    }
  );

  export const loginUser = createAsyncThunk(
    'auth/logIn',
    async (userData, thunkAPI) => {
      try {
        const { data } = await axios.post('/users/login', userData);
        setToken(data.token);
        return data;
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`, notifySettings);
        return thunkAPI.rejectWithValue(error.request.status);
      }
    }
  );

  export const LogoutUser = createAsyncThunk(
    'auth/LogOut',
    async (_, thunkAPI) => {
      try {
        await axios.post(`/users/logout`);
        unsetToken();
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`, notifySettings);
        return thunkAPI.rejectWithValue(error);
      }
    }
  );