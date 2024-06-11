import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather: '',
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload;
        },
    },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;