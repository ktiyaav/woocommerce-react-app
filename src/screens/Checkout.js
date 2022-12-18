import React, { Component } from "react";
import { connect } from "react-redux";
import { createOrder } from "../utils/api";
import { withRouter } from '../utils/withRouter';
import { withAuth0 } from "@auth0/auth0-react";
import { PaymentButton } from "../components/checkout/PaymentButoon";
import { PaymentProcessing } from "../components/checkout/PaymentProcessing";
import { ordersLoaded } from "../redux/ActionCreators";
import Navbar from "../components/ui/Navbar";

const mapDispatchToProps = (dispatch) => {
    return{
    createOrder : (payby, user, items, navigate) => dispatch(createOrder(payby, user, items, navigate)),
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
        const { loginWithRedirect } = this.props.auth0;
        if(!this.props.login.isLogged){
            loginWithRedirect()
        }
        this.props.ordersLoaded();
    }

    handleChange(payby){
            console.log(payby)
            this.props.createOrder(payby,this.props.login.user[0], this.props.cart.cart, this.props.navigate)
    }
    
    generatePriceTag(){
        return {__html: this.props.cart.currency};
    }

    render(){
        return(
        <>
        {/* {(this.props.cart.cart.length === 0) ? this.props.navigate('/cart') : null} */}
        {this.props.orders.isLoading ? <PaymentProcessing></PaymentProcessing> : null }
        <Navbar path={'/cart'} title={'Checkout'} description={this.props.cart.cart.length + ' ITEMS | TOTAL : ' + this.props.cart.currency + ' ' + this.props.cart.total} />
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