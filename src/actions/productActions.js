import axios from "axios";
import { actionTypes } from "./actionTypes";

export const setProducts=(products)=>{
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedProduct=async (product)=>{
   
    return{
        type:actionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}
export const removeSelectedProduct=()=>{
    return{
        type:actionTypes.REMOVE_SELECTED_PRODUCT,
    }
}