import { LOGIN_ALERT, LOGIN_SUCCESS, LOGOUT, REMEMBER_ME, RESET_ALERT } from "../actions/userConnection.action"

const initialState = { 
    token:null,
    alertMessage:null,
    isCheck:false
}

export default function connectionReducer(state = initialState, action) {
  switch(action.type){
    case LOGIN_SUCCESS:
      return {...state, token: action.payload}
    case LOGIN_ALERT:
      return {...state, alertMessage: action.payload}
    case RESET_ALERT:
      return {...state, alertMessage: null}
    case REMEMBER_ME:
      return {...state, isCheck: action.payload}
    case LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}