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
import { addtoCart, addCart, createOrder } from '../redux/ActionCreators';
// Creating a WithRouter with new functions as it is not supported in latest React Router Dom
const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}

const mapDispatchToProps = (dispatch) => {
  return{
    addtoCart :(product) => {dispatch(addtoCart(product))}
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
              <Route path="*" element={ <Home  /> } />
              <Route exact path="/search" element={ <Shop />}/>
              <Route exact path="/account" element={ <Account />}/>
              <Route exact path="/cart" element={ <Cart />}/>
              <Route exact path="/product/:id" element={ <Product />}/>
            </Routes>
            </>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);