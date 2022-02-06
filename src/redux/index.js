import { combineReducers, createStore } from 'redux'
const InState = {
    data: JSON.parse(localStorage.getItem('auth')) || null ,
}
const authReducer =  (state = InState, action) => {
    switch (action.type){
        case 'success authorization':
            return {...state, data: action.playload}
        case 'logout auth':
            return {...state, data: null}
        default:
            return state
    }
}
const InState2 = {
    data: JSON.parse(localStorage.getItem('basket')) || [] ,
}
const basketReducer =  (state = InState2, action) => {
    switch (action.type){
        case 'basket':
            return{...state, data: action.playload}
        default:
            return state
    }
}

export const store = createStore(combineReducers({
    auth: authReducer ,
    basket: basketReducer  
}))
