import React, { Component } from 'react';
import {ArrowLeft} from 'react-feather';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart } from '../redux/ActionCreators';
import { removeFromCart } from '../redux/ActionCreators';
import { withAuth0 } from '@auth0/auth0-react';
import {withRouter}from '../utils/withRouter';
import { fetchUser } from '../utils/api';
const mapStateToProps = (state) => {
  return{
      cart: state.cart,
      login: state.login
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addtoCart :(product) => {dispatch(addtoCart(product))},
    removeFromCart :(id) => {dispatch(removeFromCart(id))},
    fetchUser: (user) => (dispatch(fetchUser(user)))
  }
}

class Cart extends Component{
  componentDidUpdate(){
    console.log(this.props)
    console.log(this.props.auth0)
    const { user, isAuthenticated, isLoading, logout } = this.props.auth0;
    if(isAuthenticated && !this.props.login.isLogged){
      console.log('Fetch')
      this.props.fetchUser(user)
    }
  }

  RedirectTOCheckout(){
    this.props.navigate('/checkout')
  }
  RedirectToAddAddress(){
    this.props.navigate('/add-address')
  }
  render(){
    const { loginWithRedirect } = this.props.auth0;
    
    const ProceedToAddAddress = () => (
      <div className='row proceed-checkout m-auto'>
        <div className='row address m-auto'>
          <div className='col-2 no-padding m-auto'><div className='button icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg></div></div>
          <div className='col-7 no-padding m-auto'><div className='title'>Almost there!</div><p>Add address so we can deliver to you!</p></div>
          <div className='col-2'></div>
        </div>
        <div className='row no-padding m-auto'>
          <div className='col-12 button cart-address no-padding m-auto' onClick={() => this.RedirectToAddAddress()}>Add Address</div>
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
          <div className='col-2 no-padding m-auto'><div className='button icon'><i className="fa fa-user-plus" aria-hidden="true"></i></div></div>
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
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </div>
            <div className='cart-st0re-info'>
            <div className="cart-store-info" role='presentation'>
              <div className='store-name'>
                <span>Cart</span>
              </div>
              <p className='cart-eta'>{this.props.cart.cart.length} Items | ETA:  NA MINS</p>
            </div>
            </div>
            <div className='button cart-home'><i className="fa fa-home" aria-hidden="true"></i></div>
          </div>
        </Link>
        <div className="mt-2 cart">
          <div className='savings'>
            <div className='banner-g'>
              <div className='banner'>
                <div className='text'>
                  ₹ 10 total savings with
                </div>
                <div className='text-description'>
                WELCOME50 - FREE Delivery
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
                            <div className="col-4 quantity-box"><span onClick={() => this.props.removeFromCart(item.id)}>-</span></div>
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
              <i className="fa fa-commenting" aria-hidden="true"></i>
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
