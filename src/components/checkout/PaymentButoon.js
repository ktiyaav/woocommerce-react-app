import React from "react";

export const PaymentButton = (props) => {
    return(
        <div className="row my-account no-padding methods" onClick={props.handleChange}>
            <div className="col-2 m-auto d-flex justify-content-center align-items-center">
                <i className="fa fa-money fs-1" aria-hidden="true"></i>
            </div>
            <div className="col-8">
                <div className="row title">
                {props.title}
                </div>
                <div className="row desc">
                {props.description}
                </div>
            </div>
            <div className="col-2">
                <div className='button cart-home'><i className="fa fa-check" aria-hidden="true"></i></div>
            </div>
        </div>
    )
}