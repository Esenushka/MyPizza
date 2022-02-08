import { GET_PIZZAS } from "../actionTypes"

const InState2 = {
    data: JSON.parse(localStorage.getItem('basket')) || [] ,
}
export const basketReducer =  (state = InState2, action) => {
    switch (action.type){
        case GET_PIZZAS: 
            return{...state, data: action.playload}
        default:
            return state
    }
}