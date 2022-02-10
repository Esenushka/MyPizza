import { combineReducers, createStore } from 'redux'
import { authReducer } from './reducer/authReduce'
import { basketReducer } from './reducer/basketReducer'
import { pizzaReducer } from './reducer/pizzaReducer'
export const store = createStore(combineReducers({
    auth: authReducer ,
    basket: basketReducer ,
    pizza: pizzaReducer
}))
