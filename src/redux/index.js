import { combineReducers, createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './reducer/authReduce'
import { basketReducer } from './reducer/basketReducer'
import { pizzaReducer } from './reducer/pizzaReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    auth: authReducer ,
    basket: basketReducer ,
    pizza: pizzaReducer
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
window.store = store