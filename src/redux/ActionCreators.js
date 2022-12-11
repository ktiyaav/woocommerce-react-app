import * as ActionTypes from './ActionTypes';

export const addtoCart = (product) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: product
})
export const clearCart = () => ({
    type: ActionTypes.CLEAR_CART
})
export const addUser = (user) => ({
    type : ActionTypes.ADD_USER,
    payload : user
})
export const userFailed = (errMess) => ({
    type : ActionTypes.USER_FAILED,
    payload : errMess
})
export const addOrders = (orders) => ({
    type : ActionTypes.ADD_ORDERS,
    payload : orders
})
export const ordersLoading = () => ({
  type: ActionTypes.ORDERS_LOADING
})
export const addressFailed = (error) => ({ 
  type: ActionTypes.ADDRESS_FAILED,
  payload: error
})
export const addAddress = (data) => ({
  type : ActionTypes.ADD_ADDRESS,
  payload : data
});
