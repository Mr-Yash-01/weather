import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './slice' // import the default export which is the reducer

export const store = configureStore({
  reducer: {
    weather: weatherReducer, // use the reducer here
  },
})