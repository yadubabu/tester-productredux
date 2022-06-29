import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../actions/productActions';
import { useEffect } from 'react';


 const ProductDetail = () => {
   const product=useSelector(state=>state.product);
   const {image,title,price,category,description}=product;
   const dispatch=useDispatch();  
   const {productId}=useParams();
      const fetchProductDetail=async ()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
                        .then(err=>console.log(err));
              dispatch(selectedProduct(response.data));
      }
      useEffect(()=>{
        if(productId && productId !== ''){
          fetchProductDetail();
          return (()=>{
            dispatch(removeSelectedProduct());
          })
        }
      },[productId]);
  return (
    <div className='ui placeholder segment'>
      <div className='ui two column stackable center aligned grid'>
        <div className='ui vertical divider'>
          <div className='middle aligned row'>
            <div className='column lp'>
              <img className='ui fluid image' src={image}/>
            </div>
            <div className='column rp'>
              <h1>{title}</h1>
              <h2>
                <a className='ui teal tag label'>${price}</a>
              </h2>
              <h3 className='ui brown block header'>{category}</h3>
              <p>{description}</p>
              <div className='ui vertical animated button' tabIndex='0'>
                <div className='hidden content'>
                  <i className='shop icon'/>
                </div>
                <div className='visible content'>Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail;