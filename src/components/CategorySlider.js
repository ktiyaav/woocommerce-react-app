import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import API from '../config/constants';
import {Link} from 'react-router-dom';

import {CategoryLoader} from './Loader';


function CategorySlider(props) {
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    loadCategories();
  },[]);

  const loadCategories = async () => {
    const categories = await API.get('products/' + props.fetch);
    setCategories(categories.data);
    setLoaded(true);
  }
  

  var sliderConfig = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 250,
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
      <div className="section-title">{props.title}</div>
      {(loaded == false)
      ? <CategoryLoader/>
      :(
        <Slider  className="category-list" {...sliderConfig}>
          {
            categories.map((category,index) => (

              <div className="category-slider" key={index}>
              <Link  to={{
                pathname: `/category/${category.id}`
              }}>
              <img alt={category.id} src={category.image.src} className="category-image circle" />
              {/* <div className="title">{category.name}</div> */}
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

export default CategorySlider;
