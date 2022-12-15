import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../utils/api";
import { withRouter } from '../utils/withRouter';
import { withAuth0 } from "@auth0/auth0-react";
import displayRazorpay from "../utils/razorpay";
import { PaymentButton } from "../components/checkout/PaymentButoon";
import { PaymentProcessing } from "../components/checkout/PaymentProcessing";
import { ordersLoaded } from "../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => {
    return{
    createOrder : (payby, user, items) => dispatch(createOrder(payby, user, items)),
    ordersLoaded : () => dispatch(ordersLoaded())
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
        this.props.ordersLoaded();
        const { loginWithRedirect } = this.props.auth0;
        console.log(this.props)
        if(this.props.login.isLogged){
            // this.props.createOrder(this.props.login.user[0],this.props.cart.cart)
            // displayRazorpay(this.props.login.user[0],this.props.cart.cart, this.props.createOrder)
        }
        else{
            // console.log(this.props)
            // loginWithRedirect()
        }
    }
    handleChange(payby){
            console.log(payby)
            this.props.createOrder(payby,this.props.login.user[0],this.props.cart.cart)
    }
    generatePriceTag(){
        return {__html: this.props.cart.currency};
    }
    render(){
        return(
        <>
        {this.props.orders.isLoading ? <PaymentProcessing></PaymentProcessing> : null }
        <Link  to={{ pathname: `/` }}>    
        <div className="cart-header">
            <div className="button cart-back-arrow">
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </div>
            <div className='cart-st0re-info'>
                <div className="cart-store-info" role='presentation'>
                    <div className='store-name'>
                    <span>Checkout</span>
                    </div>
                    <p className='cart-eta'>{this.props.cart.cart.length} Items | Total : {this.props.cart.currency + ' ' + this.props.cart.total}</p>
                </div>
            </div>
            <div className='button cart-home'><i className="fa fa-home" aria-hidden="true"></i></div>
        </div>
        </Link>
        <div className="row checkout order-placed">
        <div className="row d-flex justify-content-center">
            <h5 className="title d-flex justify-content-center">Choose prefered Payment Method</h5>
        </div>
        <PaymentButton handleChange = {() => this.handleChange('PAYTM')} title='UPI' description='Pay Using Paytm UPI'/>
        <PaymentButton handleChange = {() => this.handleChange('RAZORPAY')} title='UPI' description='Pay Using RAZORPAY UPI'/>
        <PaymentButton handleChange = {() => this.handleChange('COD')} title='Cash on Delivery' description='Pay for your order at your doorstep.'/>
        </div>
        </>
        )
    }
}

export default withRouter(withAuth0(connect(mapStateToProps,mapDispatchToProps)(Checkout)));