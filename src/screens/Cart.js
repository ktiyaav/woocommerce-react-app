import React, { Component } from 'react';
import {ArrowLeft} from 'react-feather';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { addtoCart, createOrder} from '../redux/ActionCreators';
import { withAuth0 } from '@auth0/auth0-react';
import Checkout from './Checkout';
import {withRouter}from '../utils/withRouter';
const mapStateToProps = (state) => {
  return{
      cart: state.cart,
      login: state.login
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addtoCart :(product) => {dispatch(addtoCart(product))}
  }
}

class Cart extends Component{
  RedirectTOCheckout(){
    this.props.navigate('/checkout')
  }
  render(){
    console.log(this.props)
    const { loginWithRedirect } = this.props.auth0;
    
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
    const ProceedToCheckout = () => (
      this.props.login.user[0].shipping.address_1 ? 
      <div className='row proceed-checkout m-auto'>
        <div className='row address m-auto'>
          <div className='col-2 no-padding m-auto'><div className='button icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg></div></div>
          <div className='col-7 no-padding m-auto'>
            <div className='title'>Deliver to {this.props.login.user[0].shipping.address_1}</div><p>{this.props.login.user[0].shipping.address_2 }</p><p>{this.props.login.user[0].shipping.city}</p>
          </div>
          <div className='col-2 no-padding address-change'>CHANGE</div>
        </div>
        <div className='row no-padding second m-auto'>
          <div className='col-6 m-auto'><div className='total'>₹ {this.props.cart.total}</div><p>View Detailed Bill</p></div>
          <div className='col-6 button cart-pay no-padding m-auto' onClick={() => this.RedirectTOCheckout() }>Pay Now</div>
        </div>
      </div>
    : ProceedToAddAddress()
    )
    const ProceedToLogin = () => (
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

    if(this.props.cart.cart.length > 0){
    return(
      <>
      <div className="cart-page">
        <Link  to={{ pathname: `/` }}>    
          <div className="cart-header">
            <div className="button cart-back-arrow">
            <svg class="uHGrw" viewBox="0 0 32 32" height="18" width="18"><path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path></svg>
            </div>
            <div className='cart-st0re-info'>
            <div className="cart-store-info" role='presentation'>
              <div className='store-name'>
                <span>Cart</span>
              </div>
              <p className='cart-eta'>{this.props.cart.cart.length} Items | ETA:  NA MINS</p>
            </div>
            </div>
            <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> </svg></div>
          </div>
        </Link>
        <div className="mt-2 cart">
          <div className='savings'>
            <div className='banner-g'>
              <div className='banner'>
                <div className='text'>
                  ₹ 130 total savings with
                </div>
                <div className='text-description'>
                WELCOME50 + FREE Delivery
                </div>
              </div>
            </div>
          </div>
          <div className='items'>
            <div className='product-list'>
              {     
                    this.props.cart.cart.map((item,index) => (
                      <div className="row cart-item" key={index}>
                        <div className="col-2 pr-0"><img alt="" src={item.image} width="50" height="50"/></div>
                        <div className="col-5 my-auto name" >{item.name}</div>
                        <div className="col-3 m-auto no-padding" >
                          <div className="row qty no-padding">
                            <div className="col-4 quantity-box"><span>-</span></div>
                            <div className="col-4 quantity-box">{item.qty}</div>
                            <div className="col-4 quantity-box"><span onClick={() => this.props.addtoCart(item)}>+</span></div>
                          </div>
                        </div>
                        <div className="col-2 my-auto mr-auto no-padding price" >
                          <div className='regular'>
                          ₹ {item.regularPrice}
                          </div>
                          <div className='sale'>
                          ₹ {item.price}
                          </div>
                        </div>
                      </div>
                    ))
              }
            </div>
          </div>
          <div className='row bg-white'>
            <div className='order-query'>
              <span className='icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/> <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/> </svg>
              </span>
              <textarea className='note' placeholder="Write your suggestions!"></textarea>
            </div>
          </div>
          <div className='row mt-15 bg-white'>
            <div className='bill'>
              <div className='heading'>Bill Details</div>
              <div className='row'>
                <div className='col-10'>Item Total</div>
                <div className='col-2 my-auto mr-auto price'>₹ {this.props.cart.total}</div>
              </div>
              <div className='row'>
                <div className='col-10'>Delivery Fee</div>
                <div className='col-2 my-auto mr-auto price'>₹ 10</div>
              </div>
              <hr/>
              <div className='row'>
                <div className='col-10'>To Pay</div>
                <div className='col-2 my-auto mr-auto price'>₹ {this.props.cart.total + 10}</div>
              </div>
            </div>
          </div>
          <div className='mb-120'></div>
          { this.props.login.isLogged ? ProceedToCheckout() : ProceedToLogin() }
        </div>
      </div>
      </>
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
            <div className="container bg-white mt-2 below-header-bar">
              <img className='cart-empty' alt="empty cart" src={require('../assets/images/cart-empty.png')}/>
            </div>
            <div className='row bg-white text-center'>
              <center>Your Cart is Empty, add some product to checkout!</center>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default withRouter(withAuth0(connect(mapStateToProps, mapDispatchToProps)(Cart)));
