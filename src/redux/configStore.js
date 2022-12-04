import { createForms } from "react-redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Cart } from './Cart';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            cart: Cart,
            ...createForms({
                
            })
        }),
        applyMiddleware(thunk,logger) //add logger for logging 
    );
    return store;
}
