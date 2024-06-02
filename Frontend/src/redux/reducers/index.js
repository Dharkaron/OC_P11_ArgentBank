import { combineReducers } from 'redux'
import connectionReducer from './userConnection.reducer'

export default combineReducers({
  login: connectionReducer
})