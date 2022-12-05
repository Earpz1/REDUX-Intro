import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchReducer from '../reducer/searchReducer'
import favouriteReducer from '../reducer/favouriteReducer'

export const combinedReducer = combineReducers({
  mainSearchJobs: searchReducer,
  favouriteJobs: favouriteReducer,
})

const store = configureStore({
  reducer: combinedReducer,
})

export default store
