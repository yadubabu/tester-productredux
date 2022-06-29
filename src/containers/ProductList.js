import React from 'react';
import { setProducts } from '../actions/productActions';
import axios from 'axios';
import ProductComponent from './ProductComponent';

import { useSelector,useDispatch } from 'react-redux';

const ProductList=()=>{
const products=useSelector(state=>state);
const dispatch=useDispatch();

const fetchProducts=async ()=>{
  
    const request=await axios.get('https://fakestoreapi.com/products').catch(err=>console.log(err));
    dispatch(setProducts(request.data));
}

   fetchProducts();
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductList;