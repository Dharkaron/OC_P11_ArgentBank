import { combineReducers } from 'redux'
import connectionReducer from './userConnection.reducer'
import profileReducer from './userProfile.reducer'


export const rootReducer = combineReducers({
  login: connectionReducer,
  user: profileReducer
})

