import { actionTypes } from "../actions/actionTypes";

const initialValue={
    products:[],
}

export const productReducer=(state=initialValue,{type,payload})=>{
   switch(type){
       case actionTypes.SET_PRODUCTS:
           return {...state,products:payload};
        case actionTypes.SELECTED_PRODUCT:
            return {...state,products:payload.data}
           default:
               return state;
   }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case actionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default :
        return state;
    }
};