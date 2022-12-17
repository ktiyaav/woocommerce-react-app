import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from '../utils/withRouter';
import { withAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/ui/Navbar";
import API from "../utils/api";
import {GenericLoader} from '../components/ui/loaders/GenericLoader';
import TrackOrderMessage from "../components/order/TrackOrderMessage";

const mapStateToProps = (state) => {
    return{
        login: state.login
    }
}
class TrackOrder extends Component{
    constructor(props){
      super(props)
      this.state = {
        orderId : null,
        orderDetails: null
      }
    }
    componentDidMount(){
    const { loginWithRedirect } = this.props.auth0;
      if(this.props.login.isLogged){
        this.setState ({
          orderId : this.props.params.id
          }, () => {
            API.get("orders/"+this.state.orderId)
            .then((response) => {
              this.setState({
                orderDetails: response.data
              })
            })
            .catch((error) => {
              console.log(error.response);
            });
        })
      } else {
        loginWithRedirect();
      }
    }

    render(){
        return(
        <>
        {this.state.orderDetails == null 
        ? <GenericLoader message='Fetching Order Details'/> 
        : <>
        {
        this.props.login.user[0].id == this.state.orderDetails.customer_id ?
        <>
        <Navbar title='Track Order' description={`#${this.state.orderId}`} path='/account'/>
        <div className="row checkout order-placed">
        <TrackOrderMessage message="Order Placed Succesfully!" description="Sit back & Enjoy while we deliver your order!"/>
        </div>
        <div className='row proceed-checkout m-auto'>
            <div className='row no-padding m-auto'>
                <div className='col-12 button cart-address no-padding m-auto' onClick={this.updateOrder}>Refresh Order Status</div>
            </div>
        </div>
        </>
        : this.props.navigate('/account?sad')}</>}
        </>
        )
    }
}

export default withRouter(withAuth0(connect(mapStateToProps)(TrackOrder)));