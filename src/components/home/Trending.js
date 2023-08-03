import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../reduxComponents/action/index'

function Trending() {
    let dispatch = useDispatch()
    let navigate = useNavigate(); 
    const [trendingData, setTrendingData] = useState([])
    const data = useSelector((state) => state.allProducts.data[0].products)

    useEffect(() => {
        return getTrendingData()
    }, [])

    function getTrendingData() {
        for(let i = 0; i < 3; i++) {
            let ran = Math.floor(Math.random() * (data.length - 0) + 0)
            setTrendingData((trdata) => {
                return [...trdata, data[ran]]
            })
        }
    }

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

console.log("trendingData", trendingData)
  return (
    <div className='my-5'>
        <h1>Trendings...</h1>
        <div className='cards_cont d-flex flex-row  justify-content-between flex-wrap'>
            {trendingData.map((product, i) => {
                return ( 
                    <div key={i} className='ap_product' onClick={() => goToProduct(product)}>
                        <Cards product={product} />
                        <button className='card_addToCart_btn' onClick={() => add_to_cart(product)}>Add to cart</button>
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default Trending