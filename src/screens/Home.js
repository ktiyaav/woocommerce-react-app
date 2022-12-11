import React, { Component } from 'react';
import Banner from '../components/Banner';
import { withAuth0 } from '@auth0/auth0-react';
import ProductSlider from '../components/ProductSlider';
import CategorySlider from '../components/CategorySlider';
import { fetchVendors, fetchUser } from '../utils/api';
import { connect } from 'react-redux';
import StoresList from '../components/store/StoreList';
import { withRouter } from '../utils/withRouter';

const mapDispatchToProps = (dispatch) => {
  return{
    fetchVendors :() => {dispatch(fetchVendors())},
    fetchUser :(user) => {dispatch(fetchUser(user))}
  }
}
const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        login: state.login,
        orders: state.orders,
        stores: state.stores
    }
}
class Home extends Component{
  
  componentDidMount(){
    const { user, isAuthenticated } = this.props.auth0;
    if(this.isAuthenticated && this.isLoading){
      this.props.fetchUser(this.user.email)
    }
    this.props.fetchVendors();
    // setTimeout(()=>{
    //   this.setState({
    //     ...this.props.store, 
    //     isLoading : false
    // })
    // },2000)
  }

  componentDidUpdate(){
    const { user, isAuthenticated } = this.props.auth0;
    if(isAuthenticated && !this.props.login.isLogged){
      this.props.fetchUser(user)
    }
  }
  
  render(){
    return(
      <div className='home-page below-header-bar'>
      <Banner />
      <CategorySlider title="" fetch="categories" />
      <StoresList stores={this.props.stores}></StoresList>
      <div className='space-large'></div>
      </div>
    )
  }
}

export default withRouter(withAuth0(connect(mapStateToProps,mapDispatchToProps)(Home)));
