import React, { Component } from 'react';
import {ArrowLeft} from 'react-feather';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addtoCart } from '../redux/ActionCreators';

// Creating a WithRouter with new functions as it is not supported in latest React Router Dom
const mapStateToProps = (state) => {
  return{
      cart: state.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addtoCart :(product) => {dispatch(addtoCart(product))}
  }
}
class Cart extends Component{
  render(props){
    console.log(this.props.addtoCart);
    if(this.props.cart.cart.length > 0){
    return(
      <div>
        <div className="cart-page">
        <div className="cart-header">
          <div className="cart-back-arrow">
            <ArrowLeft/>
          </div>
          <div className="title">
            Cart
          </div>
        </div>
        <div className="container mt-2">
          <div className="items-heading">Items In cart</div>
          {     
                this.props.cart.cart.map((item,index) => (
                  <div className="row cart-item" key={index}>
                    <div className="col-2 pr-0"><img alt="" src={item.image} width="50" height="50"/></div>
                    <div className="col-4 my-auto" >{item.name}</div>
                    <div className="col-3 my-auto" >
                      <div className="row ">
                        <div className="col-4 quantity-box"><span>-</span></div>
                        <div className="col-4 quantity-box">{item.qty}</div>
                        <div className="col-4 quantity-box"><span onClick={() => this.props.addtoCart(item)}>+</span></div>
                      </div>
                    </div>
                    <div className="col-3 my-auto mr-auto" >₹ {item.price}</div>
                  </div>
                ))
          }
        </div>
      </div>
      </div>
    )
  }
    else{
      return(
        <div>
          <div className="cart-page">
          <div className="cart-header">
            <div className="cart-back-arrow">
              <ArrowLeft/>
            </div>
            <div className="title">
              Cart
            </div>
          </div>
          <div className="container mt-2">
            <div className="items-heading">No Items in Cart</div>
        </div>
        </div>
      </div>
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
