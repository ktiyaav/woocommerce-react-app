import React from "react";

import { RevolvingDot } from  'react-loader-spinner'
import 'react-loader-spinner';


export const GenericLoader = (props) => {
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
        <div className="title">{props.message}</div>
        </div>
        </>
    )
}