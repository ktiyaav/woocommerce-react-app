import React, { Component } from 'react'

const ProceedToAddAddress = () => (
    <div className='row proceed-checkout m-auto'>
      <div className='row address m-auto'>
        <div className='col-2 no-padding m-auto'><div className='button icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg></div></div>
        <div className='col-7 no-padding m-auto'><div className='title'>Almost there!</div><p>Add address so we can deliver to you!</p></div>
        <div className='col-2'></div>
      </div>
      <div className='row no-padding m-auto'>
        <div className='col-12 button cart-address no-padding m-auto'>Add Address</div>
      </div>
    </div>
)
export default ProceedToAddAddress;