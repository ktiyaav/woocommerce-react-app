import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import {Menu, Map} from 'react-feather';
const Navbar = (props) => {
  return(
    <>
    <Link  to={{ pathname: `/` }}>    
      <div className="navbar">
        <div className='cart-st0re-info'>
        <div className="cart-store-info" role='presentation'>
          <div className='store-name'>
          <img className='logo' alt="logo" src={require('../assets/images/logo.png')}/>
          </div>
        </div>
        </div>
        <div className='button cart-home'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-n</title><path d="M256,32C167.67,32,96,96.51,96,176c0,128,160,304,160,304S416,304,416,176C416,96.51,344.33,32,256,32Zm0,224a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,256Z"/></svg></div>
      </div>
    </Link>
    </>

  );
};

export default Navbar;
