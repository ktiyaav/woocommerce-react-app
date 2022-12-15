import React from "react";

import { RotatingLines } from  'react-loader-spinner'
import 'react-loader-spinner';


const SiteLoader = () => {
    return(
        <>
        <div className="payment-processing h-100 d-flex justify-content-center align-items-center">
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
        </div>
        </>
    )
}
export default SiteLoader;