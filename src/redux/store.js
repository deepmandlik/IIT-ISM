import { configureStore } from '@reduxjs/toolkit'
import {sectionReducer} from './createSection';

export const store = configureStore({
  reducer: {
    section: sectionReducer,
  },
})