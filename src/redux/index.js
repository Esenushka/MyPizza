import { combineReducers, createStore } from 'redux'
import { authReducer } from './reducer/authReduce'
import { basketReducer } from './reducer/basketReducer'

export const store = createStore(combineReducers({
    auth: authReducer ,
    basket: basketReducer  
}))
