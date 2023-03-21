import React from 'react';
import { PRODUCTS } from'.././products';
import {Product} from '../components/product';
import '../components/shop.css';

export const Shop = () => {
  return (
    <div className='shop'>
        <h1 className = 'shopTitle'> PedroTech Shop </h1>
      <div className='products'>
        
      </div>

      <div className='products'>{PRODUCTS.map((product)=> 
      
      <Product data = {product}/>
      )}</div>
    </div>
  )
}

