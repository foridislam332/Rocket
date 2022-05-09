import { createSlice } from '@reduxjs/toolkit'
import { rocketApi } from './rocketData';
const data = 'https://api.spacexdata.com/v3/launches';

const rocketSlice = createSlice({
    name: 'rocket',
    initialState: {
        rocket: rocketApi,
        search: [],
        filter: []
    },
    reducers: {
        searchByName: (state, { payload }) => {
            state.rocket = state.rocket.filter(data => data.rocket_name === payload.name)
        },
        filterByDate: (state, action) => {
            state.value -= 1
        }
    },
})

export const { searchByName, filterByDate } = rocketSlice.actions;

export default rocketSlice.reducer