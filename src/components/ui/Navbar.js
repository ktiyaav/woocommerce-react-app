import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import {Menu, Map} from 'react-feather';
const Navbar = (props) => {
  return(
    <>
    <Link  to={{ pathname: props.path }}>    
    <div className="cart-header">
      <div className="button cart-back-arrow">
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
      </div>
      <div className='cart-st0re-info'>
          <div className="cart-store-info" role='presentation'>
              <div className='store-name'>
              <span>{props.title}</span>
              </div>
              <p className='cart-eta'>{props.description}</p>
          </div>
      </div>
      <div className='button cart-home'><Link to={{pathname: '/home'}}><i className="fa fa-home" aria-hidden="true"></i></Link></div>
      
    </div>
    </Link>
    </>

  );
};

export default Navbar;
