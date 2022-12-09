import React, { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const ProceedToLogin = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='row proceed-checkout m-auto'>
        <div className='row address m-auto'>
            <div className='col-2 no-padding m-auto'><div className='button icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-x"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg></div></div>
            <div className='col-7 no-padding m-auto'><div className='title'>Almost there!</div><p>Login or signup to place an order</p></div>
            <div className='col-2'></div>
        </div>
        <div className='row no-padding m-auto'>
            <div className='col-12 button cart-pay no-padding m-auto' onClick={() => loginWithRedirect()}>Login</div>
        </div>
        </div>
    )
}
export default ProceedToLogin;