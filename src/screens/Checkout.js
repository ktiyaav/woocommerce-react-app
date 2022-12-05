import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../redux/ActionCreators";
import { withRouter } from '../utils/withRouter';
import { withAuth0 } from "@auth0/auth0-react";

const mapDispatchToProps = (dispatch) => {
    return{
    createOrder : (user,items) => dispatch(createOrder(user,items))
    }
}
const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        login: state.login,
        orders: state.orders
    }
}
class Checkout extends Component{
    componentDidMount(){
        const { loginWithRedirect } = this.props.auth0;
        if(this.props.login.isLogged){
            this.props.createOrder(this.props.login.user[0],this.props.cart.cart)
        }
        else{
            console.log(this.props)
            loginWithRedirect()
        }
    }
    render(){
        return(
        <>
        <Link  to={{ pathname: `/` }}>    
        <div className="cart-header">
            <div className="button cart-back-arrow">
                <svg class="uHGrw" viewBox="0 0 32 32" height="18" width="18"><path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path></svg>
            </div>
            <div className='cart-st0re-info'>
                <div className="cart-store-info" role='presentation'>
                    <div className='store-name'>
                    <span>Checkout</span>
                    </div>
                    <p className='cart-eta'>{this.props.cart.cart.length} Items | ETA:  NA MINS</p>
                </div>
            </div>
            <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> </svg></div>
        </div>
        </Link>
        <div className="row checkout order-placed">
            <div className="row my-account no-padding">
                <div className="col-10">
                    <div className="row title">
                    Order Placed Succesfully
                    </div>
                    <div className="row desc">
                    Sit and relax, while we deliver your order.
                    </div>
                </div>
                <div className="col-2">
                    <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"/> </svg></div>
                </div>
            </div>
        </div>
        <div className='row proceed-checkout m-auto'>
            <div className='row no-padding m-auto'>
                <div className='col-12 button cart-address no-padding m-auto'>Refresh Order Status</div>
            </div>
        </div>
        </>
        )
    }
}

export default withRouter(withAuth0(connect(mapStateToProps,mapDispatchToProps)(Checkout)));