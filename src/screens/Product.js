import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import API from '../config/constants';
import {useHistory, useParams} from 'react-router-dom';

import {ArrowLeft} from 'react-feather';
import {SingleProduct} from '../components/Loader';

function Product(props) {
  const cart = props.cart;
  const setCart = props.setCart;

  const [add, setAdd] = useState(false);
  const {id} = useParams();
  
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(false);

  const addtoCart = props.addtoCart;

  useEffect(()=>{
    loadProduct();
  },[]);

  const loadProduct = async () => {
      const products = await API.get('products/'+id);
      setProduct(products.data);
      setSrc(products.data.images[0].src);
      setLoaded(true);
  }
  return (
    <>
      <div className="product-page">
        {
          (loaded == false)
          ? <SingleProduct/>
          : (<>
          {
            (add == false)
            ? (
                <div className="product-back">
                <div className="cart-back-arrow">
                  <ArrowLeft/>
                </div>
                <div className="product-title">
                {product.name}
                </div></div>
              )
            :(
              <div className="product-added">
              <div className="cart-back-arrow">
                <ArrowLeft/>
              </div>
              <div className="product-title">
              {product.name} has been added to cart
              </div></div>
              )
          } 
            <img src={src} className="single-product-image" />
            <div className="container">
              <br />
              <h3 className="product-price">₹{product.price}</h3>
              <p>{product.short_description}</p>
              <p>Category: {product.categories[0].name}</p>
            </div>
            <div className="row bott-product-button">
            <div className="col-4 px-0">
              <button onClick={()=> {addtoCart(product); setAdd(true);}} className="cart-button">Add to cart</button>
            </div>
            <div className="col-8 px-0">
              <button className="buy-button">Buy Now</button>
            </div>
            </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default Product;
