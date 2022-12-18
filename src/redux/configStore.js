import { createForms } from "react-redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Cart } from './Cart';
import { Login } from './User';
import { Orders } from './Orders';
import { Address } from './Address';
import { Stores } from "./Stores";

//Fetching saved state from localstorage if any.
const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {}

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            cart: Cart,
            login: Login,
            orders: Orders,
            address: Address,
            stores: Stores,
            ...createForms({
                
            })
        }),
        persistedState,
        applyMiddleware(thunk) //Added logger for logging
    );

    store.subscribe(() => {
        //Saving State to Browser Local Storage : Whenever a state is changed, it will get saved in localstorage.
        localStorage.setItem('state', JSON.stringify(store.getState()))
    })
    return store;
}
