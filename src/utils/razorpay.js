import {RAZORPAY_KEY, RAZORPAY_SECRET, SITENAME, RAZORPAY_CREATE_ORDER} from '../config/constants';
import * as crypto from "crypto";


const loadRazorpaySDK = () => {
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

export const createRazorPayOrder = async (response) => {
    const {options, wooId} = response;
    // Fetch Razorpay create orders api and return Razorpay order_id to link with payment.
    // Can be implemented via any backend node or Woocommerce simple plugin or just a php 
    // file containing razorpay Instance and will call create orders with given data.
    const data = await fetch(RAZORPAY_CREATE_ORDER, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            amount: options.amount,
            currency: options.currency,
            receipt: options.receipt,
            payment_capture: 1
        })
    })
    .then((response) => response.json());
    return {...data, wooId}
}

export const proceedToPayment = (response) => {
    return new Promise(async (resolve,reject) => {
        const {wooId, amount, id, currency, name, phone, email } = response;
        const loadRazorPay = await loadRazorpaySDK();
        if (!loadRazorPay) {
            alert("Razorpay SDK failed to load.");
            return;
        }
        const options = {
            key: RAZORPAY_KEY,
            modal: {
                "ondismiss": () => {
                    console.log("Closed")
                    reject('Payment Closed by User')
                }
            },
            amount: amount,
            currency: currency,
            name: SITENAME,
            description: wooId,
            image: null,
            order_id: id,
            handler: async function (response) {
                const options = {
                    wooId: wooId,
                    paymentId : response.razorpay_payment_id,
                    orderId : response.razorpay_order_id,
                    signature: response.razorpay_signature
                }
                resolve(options);
    
            },
            prefill: {
                name: name,
                email: email,
                contact: phone
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    })
    
}

export const verifyPayment = (options) => {
    const { wooId, orderId, signature, paymentId } = options;
    const generatedSignature = crypto.createHmac("sha256", RAZORPAY_SECRET);
    generatedSignature.update(`${orderId}|${paymentId}`);
    const digest = generatedSignature.digest("hex");
    if (digest !== signature) {
        console.log('Transaction is not legit')
        console.log(wooId,0)
        return {
                wooId: wooId,
                paymentStatus: 0 }
    } else {
        console.log('Verified')
        return {
            wooId: wooId,
            paymentStatus: 1 }
    }
}