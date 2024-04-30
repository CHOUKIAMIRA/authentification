import { LOGIN, REGISTER } from "../actionType/actionType"

const initialState = {
    user:{},
    msg:""
}

export const reduceruser = (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
   localStorage.setItem("token",payload.token)
  return { ...state, user:payload.user,msg:payload.msg }

  case LOGIN:
   localStorage.setItem("token",payload.token)
  return { ...state, user:payload.user,msg:payload.msg }

  default:
    return state
  }
}
