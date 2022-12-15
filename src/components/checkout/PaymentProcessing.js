import React from "react";

import { RevolvingDot } from  'react-loader-spinner'
import 'react-loader-spinner';


export const PaymentProcessing = () => {
    return(
        <>
        <div className="payment-processing h-100 d-flex justify-content-center align-items-center">
        <RevolvingDot
            height="300"
            width="300"
            radius="25"
            color="#222"
            secondaryColor=''
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        <div className="title">Please Wait, your payment is in progress, don't close this or go back!</div>
        </div>
        </>
    )
}