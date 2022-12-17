import React, { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import { fetchOrders, fetchUser } from "../utils/api";
import { connect } from "react-redux";
import AccountLoader from "../components/ui/loaders/AccountLoader";
import OrdersLoader from '../components/ui/loaders/OrdersLoader';
import { withRouter } from "../utils/withRouter";

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUser :(email) => {dispatch(fetchUser(email))},
    fetchOrders: (user) => {dispatch(fetchOrders(user))}
  }
}
const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        login: state.login,
        orders: state.orders
    }
}
class Account extends Component{
componentDidUpdate(){
  if(this.props.login.isLogged){
    if(this.props.orders.isLoading)this.props.fetchOrders(this.props.login.user[0])}
}
render(){
  const { user, isAuthenticated, isLoading, logout } = this.props.auth0;
  const { loginWithRedirect } = this.props.auth0;
  
  if (this.props.auth0.isLoading) {
    return <AccountLoader></AccountLoader>;
  }
  console.log(this.props)
  if(this.props.auth0.isAuthenticated){
  if ( this.props.login.isLogged ) {
    
    return (
      <>
      <AccountLoader></AccountLoader>
      <div className="account-page">
        <div className="user row m-auto">
          <div className="col-3 m-auto"><img alt="user-avatar" className="avatar" src={this.props.login.user[0].avatar_url}></img></div>
          <div className="col-7 m-auto">
            <div className="row title m-auto">Hello {this.props.login.user[0].first_name}</div>
            <div className="row m-auto p">{this.props.login.user[0].email} | {this.props.login.user[0].billing.phone}</div>
          </div>
          <div className="col-2 m-auto"></div>
        </div>
        <div className="row my-account no-padding">
          <div className="col-10">
            <div className="row title">
              My Account
            </div>
            <div className="row desc">
              Address, Favourites, Offers & Settings
            </div>
          </div>
          <div className="col-2">
          <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/> </svg></div>
          </div>
        </div>
        <div className="row my-account no-padding">
          <div className="col-10">
            <div className="row title">
              Payment & Refunds
            </div>
            <div className="row desc">
              Manager your payment modes and check refunds.
            </div>
          </div>
          <div className="col-2">
          <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/> </svg></div>
          </div>
        </div>
        <div className="row my-account no-padding">
          <div className="col-10">
            <div className="row title">
              Wallet
            </div>
            <div className="row desc">
              Manage wallet, add money, quick order.
            </div>
          </div>
          <div className="col-2">
          <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/> </svg></div>
          </div>
        </div>
        <div className="row my-account no-padding">
          <div className="col-10">
            <div className="row title">
              Help
            </div>
            <div className="row desc">
              FAQ and Customer support!
            </div>
          </div>
          <div className="col-2">
          <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/> </svg></div>
          </div>
        </div>
        <div className="row my-account no-padding" onClick={() => logout({ returnTo: window.location.origin })}>
          <div className="col-10">
            <div className="row title">
              Logout
            </div>
            <div className="row desc">
              Not {this.props.login.user[0].first_name} ? Click here to logut and login again!
            </div>
          </div>
          <div className="col-2">
          <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backspace-reverse-fill" viewBox="0 0 16 16"> <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z"/> </svg></div>
          </div>
        </div>
        <div className="row orders-title">
        Past Orders
        </div>
        {this.props.orders.isLoading ? <OrdersLoader/> : 
        this.props.orders.orders.map((item,index) => (
          <div className="row my-orders no-padding" key={item.id}>
            <div className="col-10">
              <div className="row title">
                #{item.id + ' - ' + item.date_created.split('T')[0]}
              </div>
              <div className="row desc status">
                {item.status}
              </div>
              <div className="row desc">
              {item.currency_symbol + ' ' + item.total}
              </div>
            </div>
            <div className="col-2 no-padding">
            <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16"> <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> </svg></div>
            </div>
            <div className="space-medium"></div>
            <div className="row">
              <div className='col-5 btn' onClick={() => this.props.navigate('/track-order/' + item.id)}>Track Order</div>
              <div className='col-5 btn-ac'>Rate Order</div>
            </div>
          </div>
        ))}
        <div className="space-large"></div>
        </div>
      </>    
    )
    } else {
      this.props.fetchUser(user)
      return <AccountLoader></AccountLoader>;
    }
  }
  this.props.auth0.loginWithRedirect({
    appState: { target: '/account' }
  });
}
}

export default withRouter(withAuth0(connect(mapStateToProps,mapDispatchToProps)(Account)));