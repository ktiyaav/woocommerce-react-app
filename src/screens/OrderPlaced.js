import React, { Component } from "react";
import { connect } from "react-redux";
import { createOrder } from "../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => {
    return{
      createOrder :(user,items) => {dispatch(createOrder(user,items))}
    }
}
const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        login: state.login
    }
}
class OrderPlaced extends Component{
    render(){
        return(
            <>
            {console.log(this.props.cart.cart)}
            </>
            
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderPlaced);