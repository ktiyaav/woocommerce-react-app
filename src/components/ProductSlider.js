import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import API from '../utils/api';
import {Link} from 'react-router-dom';
import ProductLoader, {CategoryLoader} from './ui/loaders/ProductLoader';

function ProductSlider(props) {
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    loadProducts();
  },[]);

  const loadProducts = async () => {
      const products = await API.get(props.fetch);
      setProducts(products.data);
      setLoaded(true);
  };

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 3.8,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 2.8,
                slidesToScroll: 1
            }
        }
    ]
  };

  return (
    <>
      <div className='row restaurants-nearby'>
            <div className="col-6 d-flex align-items-center pl-4"><i className={props.icon} aria-hidden="true"></i>&nbsp;{props.title}</div>
            <div className="col-6"></div>
          </div>
      {(loaded == false)
      ? <ProductLoader/>
      :(
        <Slider  className="slick-list" {...settings}>
         
        {
          products.map((product,index) => (
            <div className="product-slider" key={index}>
          <Link  to={{
            pathname: `/product/${product.id}`
          }}>
            <img alt={product.id} src={product.images[0].src} className="product-image" />
            <div className="product-description"><div className="title">{product.name}</div> ₹{product.price}</div>
          </Link>
          </div>
          ))
        } 
      </Slider>
      )
      }
       
    </>
  );
}

export default ProductSlider;
