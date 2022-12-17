import React,{Component} from 'react';
import { Route, Routes, browserHistory} from 'react-router-dom';
import Home from '../screens/Home';
import Navbar from './Navbar';
import Bottom from './Bottom';
import Cart from '../screens/Cart';
import Shop from '../screens/Shop';
import Account from '../screens/Account';
import Product from '../screens/Product';
import Login from '../screens/Login';
import Profile from '../components/Authentication/Profile'
import Checkout from '../screens/Checkout';
import Address from '../screens/Address';
import TrackOrder from '../screens/TrackOrder';
class Main extends Component{
    
    render(){
        return(
            <>
            <Navbar />
            <Bottom />
            <Routes>
              <Route path="*" element={ <Home  /> } />
              <Route exact path="/home" element={ <Home  /> } />
              <Route exact path="/login" element={ <Login  /> } />
              <Route exact path="/search" element={ <Shop />}/>
              <Route exact path="/account" element={ <Account />}/>
              <Route exact path="/cart" element={ <Cart />}/>
              <Route exact path="/product/:id" element={ <Product />}/>
              <Route exact path="/logout" element={ <Profile />}/>
              <Route exact path="/checkout" element={ <Checkout />}/>
              <Route exact path="/add-address" element={ <Address />}/>
              <Route exact path="/track-order/:id" element={ <TrackOrder />}/>
            </Routes>
            </>
        );
    }
}
export default Main;