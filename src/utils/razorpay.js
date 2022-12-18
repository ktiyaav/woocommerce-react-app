import {RAZORPAY_KEY, RAZORPAY_SECRET, SITENAME} from '../config/constants';
import * as crypto from "crypto";
import Razorpay from"razorpay";

const RAZORPAY = new Razorpay({
  key_id: RAZORPAY_KEY,
  key_secret: RAZORPAY_SECRET,
  headers: {
    "X-Razorpay-Account": "E08YlpEYadih8H",
    "Authorization": "Basic cnpwX3Rlc3RfNThYREFNOUVmblJBMFk6OHlKZTdIdXNzUkhrbU55QzdkU2ZaZWdZ",
    "Accept": "application/json",
    "Cache-Control": "no-cache",
    "Host": "api.razorpay.com",
    "Access-Control-Allow-Methods": 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Headers": 'Origin, Content-Type, X-Auth-Token'
  } 
});
export default RAZORPAY;

export const RazorpayFetch = () => {
    fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic cnpwX3Rlc3RfNThYREFNOUVmblJBMFk6OHlKZTdIdXNzUkhrbU55QzdkU2ZaZWdZ",
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "Host": "api.razorpay.com",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Methods": 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Headers": 'Origin, Content-Type, X-Auth-Token'
      },
      body: JSON.stringify({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 1
      })
    })
    .then(response => {
      response.json()
    })
    .then(responseJson => {
      console.log("responseJson", responseJson);
      var order = responseJson;
    })
    .catch(error => console.log(error))
}

function loadScript() {
    const src = 'https://checkout.razorpay.com/v1/checkout.js';
    return new Promise((resolve,reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            reject('Failed to load!');
        };
        document.body.appendChild(script);
    });
}

export const createRazorPayOrder = async (options, wooId) => {
    await RAZORPAY.orders.create(options)
    .then(response => {
      return {...response.data, wooId}
    })
    .catch(error => console.log(error))
}
  


export const proceedToPayment = async (response) => {
    const loadRazorPay = await loadScript();
    if (!loadRazorPay) {
        alert("Razorpay SDK failed to load.");
        return;
    }
    const {wooId, amount, order_id, currency, reciept } = response;
    const options = {
        key: RAZORPAY_KEY,
        amount: amount,
        currency: currency,
        name: SITENAME,
        description: reciept,
        image: null,
        order_id: order_id,
        handler: async function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
            const options = {
                wooId: wooId,
                paymentId : response.razorpay_payment_id,
                orderId : response.razorpay_order_id,
                signature: response.razorpay_signature
            }
            return options;
        },
        prefill: {
            name: "Jufy",
            email: "jufy@testmail.com",
            contact: "9999999999",
        },
        notes: {
            address: "India",
        },
        theme: {
            color: "#222",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

export const verifyPayment = (options) => {
    console.log(options)
    const { wooId, orderId, signature, paymentId } = options;
    const generatedSignature = crypto.createHmac("sha256", RAZORPAY_SECRET);
    generatedSignature.update(`${orderId}|${paymentId}`);
    const digest = generatedSignature.digest("hex");
    if (digest !== signature) {
        console.log('Transaction is not legit')
        return (wooId,0)
    } else {
        console.log('Verified')
        return (wooId,1)
    }
}
  