import React from 'react'
import '../../../static/components/home/productPage/productPageRight.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../reduxComponents/action/index'

function ProductPageRight(props) {
    let dispatch = useDispatch()
    const { state } = props
    // console.log("state", state)

    const ratings = (rating) => {
        let res = ''
        if(rating < 1) return res = '*'
        else {
            while(rating >= 0) {
                if(rating-- > 0) res += '*'
            }
        }
        return res 
    }

    const add_to_cart = (state) => {
        let newState = {...state, qty:1}
        console.log("add_to_cart", state)
        dispatch(addToCart(newState))
    } 

    return (
        <div className='productPageRight p-2 px-3'>
            <div className='ppr'>
                {/* {allProducts.products.map((product, i) => {
                    return ( */}
                        <div className='product_detail'>
                            <h1 className='product_title'>{state.product.title}</h1>
                            <h2>{state.product.description}</h2>
                            <p>{ratings(state.product.rating)} {state.product.rating} ratings</p>
                            <h2><span className='discount'>-{state.product.discountPercentage}</span> Rs.{state.product.price}</h2>
                            <p>{state.product.stock} pieces available</p>
                            <div className='product_btns d-flex'>
                                <div className='product_btn'>
                                    <button className='add_to_cart' onClick={() => add_to_cart(state.product)}>Add To Cart</button>
                                </div>
                                <div className='product_btn'>
                                    <button className='buy_now'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    {/* )
                })} */}
            </div>
        </div>
    )
}

export default ProductPageRight