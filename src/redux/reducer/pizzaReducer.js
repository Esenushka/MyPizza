import { GET_PIZZA } from "../actionTypes"

const InState2 = {
    data: [] ,
    isLoading: true 
}
export const pizzaReducer =  (state = InState2, action) => {
    switch (action.type){
        case GET_PIZZA: 
            return{...state, data: action.playload,isLoading: false}
        default:
            return state
    }
}
