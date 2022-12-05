import API from '../config/constants';
import * as ActionTypes from './ActionTypes';

export const addtoCart = (product) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: product
})


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
export const fetchOrders = (user) => (dispatch) => {
    API.get("orders?customer="+user[0].id)
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

export const fetchAddress = () => (dispatch) => {
}
export const addAddress = (shipping,billing) => (dispatch) => {
}


