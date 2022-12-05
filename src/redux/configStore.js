import { createForms } from "react-redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Cart } from './Cart';
import { Login } from './User';
import { Orders } from './Orders';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            cart: Cart,
            login: Login,
            orders: Orders,
            ...createForms({
                
            })
        }),
        applyMiddleware(thunk,logger) //add logger for logging 
    );
    return store;
}
