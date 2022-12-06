import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchReducer from '../reducer/searchReducer'
import favouriteReducer from '../reducer/favouriteReducer'
import localStorage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

export const combinedReducer = combineReducers({
  mainSearchJobs: searchReducer,
  favouriteJobs: favouriteReducer,
})

const persistConfig = {
  key: 'root',
  storage: localStorage,
}

const mainReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
