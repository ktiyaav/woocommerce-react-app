import axios from 'axios';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { BASEURL, CONSUMER_KEY, CONSUMER_SECRET, WCVERSION, WCFM } from "../config/constants";
import { addStores, addUser, ordersLoading } from "../redux/ActionCreators";
import { clearCart, addOrders, addAddress, addressFailed } from "../redux/ActionCreators";
import { push } from 'react-router-redux';
import { Navigate } from 'react-router-dom';

const WOOAPI = (NAMESPACE) => new WooCommerceRestApi({
    url: BASEURL,
    consumerKey: CONSUMER_KEY,
    consumerSecret: CONSUMER_SECRET,
    version: NAMESPACE,
    queryStringAuth: true
});

const API = WOOAPI(WCVERSION)
const STOREAPI = WOOAPI(WCFM)
export default API; 
  
axios.interceptors.request.use(function (config) {
  const { headers = {} } = config || {}
  if (headers['User-Agent']) delete config.headers['User-Agent']
  return config
})
// export const API = axios.create({
//   baseURL:  BASEURL,
//   version: WCVERSION
// }); 
// API.interceptors.request.use(config => {
//   config.params = {
//    consumer_key: CONSUMER_KEY,
//    consumer_secret: CONSUMER_SECRET,
//     ...config.params,
//   };
//   return config;
// });


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

// ORDER
export const createOrder =(payby, user,items, navigate) => (dispatch) => {
    dispatch(ordersLoading());
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
    items.map((item,index) => (
        orderData.line_items.push({
            product_id: item.id, 
            quantity: item.qty
        })
    ))
    API.post("orders", orderData)
    .then((response) => {
        dispatch(clearCart())
        const options = { 
          amount: parseInt(response.data.total) * 100,
          currency: response.data.currency,
          reciept: response.data.id
        }
        console.log(response.data)
        navigate('/track-order/'+ response.data.id)
        // if(payby === 'RAZORPAY') return createRazorPayOrder(options);
    })
    .catch((error) => {
        console.log(error);
    });
}

export const fetchOrder = async (orderID) => {
  console.log('hii')
  await API.get("orders/" + orderID)
  .then(response => { return response.data })
  .catch(error => console.log(error))
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

// ADDRESS
export const fetchAddress = () => (dispatch) => {
}
export const postAddress = (id, telnum, address1, address2, city, state, country, zip) => (dispatch) => {
    console.log(id)
    const data = {
      billing: {
        address_1: address1,
        address_2: address2,
        city: city,
        state: state,
        country: country,
        postcode: zip,
        phone: telnum
      },
      shipping: {
        address_1: address1,
        address_2: address2,
        city: city,
        state: state,
        country: country,
        postcode: zip, 
        phone: telnum
      }
    }
    API.put("customers/"+ id ,data)
    .then((response) => {
      console.log(response.data);
      dispatch(addAddress(data))
    })
    .catch((error) => {
      dispatch(addressFailed(error.response.data.message))
      console.log(error.response.data);
    });
}

// Vendors
export const fetchVendors = (user) => (dispatch) => {
  STOREAPI.get("store-vendors")
  .then((response) => {
    if(response.data.length){
      dispatch(addStores(response.data))
    }
  })
  .catch((error) => {
    console.log(error.response);
  });
}