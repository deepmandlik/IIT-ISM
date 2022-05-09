import { configureStore } from '@reduxjs/toolkit'
import {sectionReducer} from './createSection';
import { storageReducer } from './storageOfData';

export const store = configureStore({
  reducer: {
    section: sectionReducer,
    storage : storageReducer
  },
})