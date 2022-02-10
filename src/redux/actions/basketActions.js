import { ADD_PIZZA } from "../actionTypes";

export const addPizzaAC = (playload)=>({
    type: ADD_PIZZA,
   playload: playload
})