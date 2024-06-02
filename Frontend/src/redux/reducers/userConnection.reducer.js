import { LOGIN_ALERT, LOGIN_SUCCESS, LOGOUT, RESET_ALERT } from "../actions/userConnection.action"

const initialState = { 
    token:null,
    alertMessage:null
}

export default function connectionReducer(state = initialState, action) {
  switch(action.type){
    case LOGIN_SUCCESS:
      return {...state, token: action.payload}
    case LOGIN_ALERT:
      return {...state, alertMessage: action.payload}
    case RESET_ALERT:
      return {...state, alertMessage: null}
    case LOGOUT:
      return { ...state, token: null }
    default:
      return state
  }
}