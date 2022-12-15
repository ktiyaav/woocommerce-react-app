import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import API from '../utils/api';
import {useHistory, useParams} from 'react-router-dom';

import {ArrowLeft} from 'react-feather';
import { addtoCart } from "../redux/ActionCreators";
import { connect } from "react-redux";
import ProductLoader from "../components/ui/loaders/ProductLoader";
import Navbar from "../components/ui/Navbar";

const mapStateToProps = (state) => {
  return{
      cart: state.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addtoCart :(product) => {dispatch(addtoCart(product))}
  }
}

function Product(props) {
  const [add, setAdd] = useState(false);
  const {id} = useParams();
  
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(false);

  console.log(props)
  useEffect(()=>{
    loadProduct();
  },[]);

  const loadProduct = async () => {
      const products = await API.get('products/'+id);
      setProduct(products.data);
      console.log(products.data)
      setSrc(products.data.images[0].src);
      setLoaded(true);
  }
  return (
    <>
      <div className="product-page">
        {
          (loaded == false)
          ? <ProductLoader/>
          : (<>
          {
            (add == false)
            ? (
              <Navbar title={product.name} description={'Store: ' + product.store.store_name} path={'/search'}/>
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
              <button onClick={()=> {props.addtoCart(product); setAdd(true);}} className="cart-button">Add to cart</button>
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


export default connect(mapStateToProps, mapDispatchToProps)(Product);
