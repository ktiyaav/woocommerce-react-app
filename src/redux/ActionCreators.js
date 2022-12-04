import API from '../config/constants';
import * as ActionTypes from './ActionTypes';

export const addtoCart = (product) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: product
})

export const fetchOrders = () => (dispatch) =>{
}
export const createOrder =(data) => (dispatch) => {
    console.log(data);
    API.post("orders", data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
}

export const fetchAddress = () => (dispatch) => {

}
export const addAddress = (shipping,billing) => (dispatch) => {

}