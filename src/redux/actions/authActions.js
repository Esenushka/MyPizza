import { LOGOUT_AUTH, SUCCESS_AUTH } from "../actionTypes";

export const successAuth = (playload)=>({
    type: SUCCESS_AUTH,
    playload
})

export const logoutAuth = ()=>({
    type: LOGOUT_AUTH,
})