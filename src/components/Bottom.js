import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'

import { Home, ShoppingCart, Search, User } from 'react-feather';


const Bottom = () => {
  return(
    <>
    <div className="bott-bar">
      <NavLink className="bott-icon"  to="/"><Home  /><div className="bott-title">Home</div></NavLink>
      <NavLink className="bott-icon"  to="/search"><Search /><div className="bott-title">Shop</div></NavLink>
      <NavLink className="bott-icon"  to="/cart"><ShoppingCart /><div className="bott-title">Cart</div></NavLink>
      <NavLink className="bott-icon"  to="/account"><User /><div className="bott-title">Account</div></NavLink>
    </div>
    </>

  );
};

export default Bottom;
