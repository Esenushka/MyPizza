import Api from "../../api/api";
import { GET_PIZZA } from "../actionTypes";

export const getPizzaAC = (playload)=>({
    type: GET_PIZZA,
   playload: playload
})

export const getPizzaAsync = ()=>{
    return(dispatch) => {
    Api.getAllPizza()
    .then((res) => {
        dispatch(getPizzaAC(res.data))
    
    })
    .catch((error) => console.log(error)) 
    }}