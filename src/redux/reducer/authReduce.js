import { LOGOUT_AUTH, SUCCESS_AUTH } from "../actionTypes"

const InState = {
    data: JSON.parse(localStorage.getItem('auth')) || null ,
}
export const authReducer =  (state = InState, action) => {
    switch (action.type){
        case SUCCESS_AUTH:
            return {...state, data: action.playload}
        case LOGOUT_AUTH:
            return {...state, data: null}
        default:
            return state
    }
}