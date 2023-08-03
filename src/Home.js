import React from 'react'
import Index from './components/home/Index'
import ProductPage from './components/home/productPage/ProductPage'
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import GoToHeaderProduct from './components/header/headerComps/goToHeaderProduct';
import Payment from './components/payment/Payment';

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="products/:category" element={<GoToHeaderProduct />}></Route>
        <Route exact path='/payment' element={<Payment />} />
      </Routes> 
    </div>
  )
}

export default Home
