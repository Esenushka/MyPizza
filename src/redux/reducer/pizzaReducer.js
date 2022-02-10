import { GET_PIZZA } from "../actionTypes"

const InState2 = {
    data: [] ,
}
export const pizzaReducer =  (state = InState2, action) => {
    switch (action.type){
        case GET_PIZZA: 
            return{...state, data: action.playload}
        default:
            return state
    }
}