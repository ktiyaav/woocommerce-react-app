import React, { Component } from 'react';
import Banner from '../components/Banner';
import ProductSlider from '../components/ProductSlider';
import CategorySlider from '../components/CategorySlider';
import API from '../config/constants';
class Home extends Component{
  render(){
    return(
      <div>
      <Banner />
      <CategorySlider title="" fetch="categories" />
      <ProductSlider title="New Arrivals" fetch="products" />
      <ProductSlider title="Category" fetch="products?category=112" />
      <ProductSlider title="Tag" fetch="products?tags=34" />
      <ProductSlider title="Category" fetch="products?category=113" />
      </div>
    )
  }
}

export default Home;
