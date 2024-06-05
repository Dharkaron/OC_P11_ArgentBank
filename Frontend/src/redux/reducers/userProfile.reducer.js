import { LOGOUT } from "../actions/userConnection.action"
import { PROFILE_DATA } from "../actions/userProfile.action"



const initialState = { 
  userData:null
}

export default function profileReducer(state = initialState, action) {
switch(action.type){
  case PROFILE_DATA:
    return { ...state, userData: action.payload }
  case LOGOUT:
    return { ...initialState }
  default:
    return state
}
}