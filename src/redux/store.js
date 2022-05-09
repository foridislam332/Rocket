import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Slices/rocketSlice';

export const store = configureStore({
    reducer: {
        rocketReducer
    },
})