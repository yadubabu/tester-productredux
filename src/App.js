import React from 'react';
import { BrowserRouter,Router,Route } from 'react-router-dom';
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail';





const App = () => {
 
  return (
    <div><ProductList/>
      <BrowserRouter>

      <Router>
      <Route path='/' component={ProductList} />
      <Route path='/product/productId' component={ProductDetail} />
    </Router>
      </BrowserRouter>  
    </div>
  )

  }
  export  default App;