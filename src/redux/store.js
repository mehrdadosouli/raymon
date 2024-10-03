import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './features/counter/generalSlice'

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
})