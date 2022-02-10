import { GET_PIZZA } from "../actionTypes";

export const getPizzaAC = (playload)=>({
    type: GET_PIZZA,
   playload: playload
})