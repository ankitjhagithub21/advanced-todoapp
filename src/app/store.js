import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/appSlice'

export const store = configureStore({
  reducer: {
    app:todoReducer
  },
})