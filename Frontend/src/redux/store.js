import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // LocalStorage

import { rootReducer }  from './reducers'


export const persistConfig = {
  key: 'root',
  storage: storage
}


export const store = configureStore( {
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: true
})

export const persiststore = persistStore(store)
