import API from '../config/constants';
import * as ActionTypes from './ActionTypes';
import { Navigate } from 'react-router-dom';
import React from 'react';
// CART
export const addtoCart = (product) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: product
})
export const clearCart = () => ({
    type: ActionTypes.CLEAR_CART
})

// USER
export const fetchUser = (user) => (dispatch) => {
    API.get("customers?email="+user.email)
    .then((response) => {
      if(response.data.length){
         dispatch(addUser(response.data))
      } else{ 
        dispatch(createUser(user))
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
}
export const addUser = (user) => ({
    type : ActionTypes.ADD_USER,
    payload : user
})
export const createUser = (user) => (dispatch) => {
    console.log(user)
    const data = {
        email: user.email,
        first_name: user.given_name,
        last_name: user.family_name,
        username: user.nickname,
        billing: {
          first_name: user.given_name,
          last_name: user.family_name,
          company: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: user.email,
          phone: ""
        },
        shipping: {
          first_name: user.given_name,
          last_name: user.family_name,
          company: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: ""
        }
    };
    API.post("customers", data)
    .then((response) => {
        console.log(response.data);
        dispatch(fetchUser(response.data))
    })
    .catch((error) => {
        console.log(error.response.data);
    });
}
export const userFailed = (errMess) => ({
    type : ActionTypes.USER_FAILED,
    payload : errMess
})

// ORDER
export const createOrder =(user,items) => (dispatch) => {
    console.log(user);
    console.log(items);
    const orderData = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        customer_id: user.id,
        billing: {
          first_name: user.first_name,
          last_name: user.last_name,
          address_1: user.shipping.address_1,
          address_2: user.shipping.address_2,
          city: user.shipping.city,
          state: user.shipping.state,
          postcode: user.shipping.postcode,
          country: user.shipping.country,
          email: user.billing.email,
          phone: user.billing.phone
        },
        shipping: {
          first_name: user.first_name,
          last_name: user.last_name,
          address_1: user.shipping.address_1,
          address_2: user.shipping.address_2,
          city: user.shipping.city,
          state: user.shipping.state,
          postcode: user.shipping.postcode,
          country: user.shipping.country,
        },
        line_items: [],
        shipping_lines: [
          {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "10.00"
          }
        ]
    };
    items.map((item,index) => {
        orderData.line_items.push({
            product_id: item.id, 
            quantity: item.qty
        })
    })
    API.post("orders", orderData)
    .then((response) => {
        console.log(response.data);
        dispatch(clearCart())
    })
    .catch((error) => {
        console.log(error);
    });
}
export const fetchOrders = (user) => (dispatch) => {
    API.get("orders?customer="+user.id)
    .then((response) => {
      dispatch(addOrders(response.data))
    })
    .catch((error) => {
      console.log(error.response);
    });
}
export const addOrders = (orders) => ({
    type : ActionTypes.ADD_ORDERS,
    payload : orders
})
export const ordersLoading = () => ({
  type: ActionTypes.ORDERS_LOADING
})

// ADDRESS
export const fetchAddress = () => (dispatch) => {
}
export const addAddress = (shipping,billing) => (dispatch) => {
}


