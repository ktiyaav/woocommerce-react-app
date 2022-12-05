import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Home from '../screens/Home';
import Navbar from './Navbar';
import Bottom from './Bottom';
import Cart from '../screens/Cart';
import Shop from '../screens/Shop';
import Account from '../screens/Account';
import Product from '../screens/Product';
import Login from '../screens/Login';
import Profile from '../components/Authentication/Profile'
import { addtoCart, addCart, createOrder, fetchUser } from '../redux/ActionCreators';
import OrderPlaced from '../screens/OrderPlaced';
import Checkout from '../screens/Checkout';

const mapDispatchToProps = (dispatch) => {
  return{
    addtoCart :(product) => {dispatch(addtoCart(product))},
    fetchUser : (email) => {dispatch(fetchUser(email))}
  }
}
const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

class Main extends Component{
    render(){
        return(
            <>
            <Navbar />
            <Bottom />
            <Routes location={this.props.location}>
              <Route exact path="/home" element={ <Home  /> } />
              <Route exact path="/login" element={ <Login  /> } />
              <Route path="*" element={ <Home  /> } />
              <Route exact path="/search" element={ <Shop />}/>
              <Route exact path="/account" element={ <Account />}/>
              <Route exact path="/cart" element={ <Cart />}/>
              <Route exact path="/product/:id" element={ <Product />}/>
              <Route exact path="/logout" element={ <Profile />}/>
              <Route exact path="/checkout" element={ <Checkout />}/>
            </Routes>
            </>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);