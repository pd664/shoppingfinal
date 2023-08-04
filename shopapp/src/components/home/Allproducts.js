import React from 'react';
import '../../static/components/home/allProduct.css'
import Cards from './Cards';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reduxComponents/action/index'
function Allproducts() {
  let navigate = useNavigate(); 
  let dispatch = useDispatch()

  const data = useSelector((state) => state.allProducts.data[0])
  // console.log("data", data)

  const goToProduct = (product) => {
    console.log("product", product)
    navigate(`/product`, {
      state : {
        product: product
      }
    })
  }

  const add_to_cart = (state) => {
    let newState = {...state, qty:1}
    // console.log("add_to_cart", state)
    dispatch(addToCart(newState))
} 

  return (
    <div className='allProducts'>
      <div className='AP_cont my-5'>
        <h1>All Products...</h1>
        <div className='cards_cont d-flex flex-row  justify-content-between flex-wrap'>
          {data.products.map((product, i) => {
            return (
              <div key={i} className='ap_product'>
                <div  onClick={() => goToProduct(product)}>
                  <Cards product={product} />
                </div>
                <button className='card_addToCart_btn' onClick={() => add_to_cart(product)}>Add to cart</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Allproducts