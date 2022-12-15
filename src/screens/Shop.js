import React from 'react';
import ProductSlider from '../components/ProductSlider';

function Shop() {
  return (
    <>
    <div className='bg-grey'>
    <div className='space-medium2'></div>
    <ProductSlider icon="fa fa-cutlery" title="Food" fetch="products?category=85" />
    <ProductSlider icon="fa fa-bolt" title="Fashion" fetch="products?category=173" />
    <ProductSlider icon="fa fa-thumbs-o-up" title="Grocery" fetch="products?category=174" />
    <div className='space-medium2'></div>
    </div>
    </>
   
  );
}

export default Shop;
