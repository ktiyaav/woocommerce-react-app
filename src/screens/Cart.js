import React from 'react';
import {ArrowLeft} from 'react-feather';
function Cart(props) {
  const cart = props.cart;
  const setCart = props.setCart;
  const addtoCart = props.addtoCart;
  const removeCart = props.removeCart;
  console.log(cart);

  let group = cart.reduce((r, a) => {
    r[a.id] = [...r[a.id] || [], a];
    return r;
   }, {});
   console.log(group);

  return (
    <>
    <div className="cart-page">
      <div className="cart-header">
        <div className="cart-back-arrow">
          <ArrowLeft/>
        </div>
        <div className="title">
          Cart
        </div>
      </div>
      <div className="container mt-2">
        <div className="items-heading">Items In cart</div>
        {
              cart.map((item,index) => (
                <div className="row cart-item" key={index}>
                  <div className="col-2 pr-0"><img alt="" src={item.images[0].src} width="50" height="50"/></div>
                  <div className="col-4 my-auto" >{item.name}</div>
                  <div className="col-3 my-auto" >
                    <div className="row ">
                      <div className="col-4 quantity-box"><span onClick={() => removeCart(item)}>-</span></div>
                      <div className="col-4 quantity-box">1</div>
                      <div className="col-4 quantity-box"><span onClick={() => addtoCart(item)}>+</span></div>
                    </div>

                  </div>
                  <div className="col-3 my-auto mr-auto" >₹ {item.price}</div>
                </div>
                
              ))
        }
      </div>
  














    </div>
    </>
  );
}

export default Cart;
