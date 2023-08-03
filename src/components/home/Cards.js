import React from 'react'
import '../../static/components/home/cards.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reduxComponents/action/index'

function Cards(props) {
    let {product} = props
    let navigate = useNavigate(); 
let dispatch = useDispatch()
    // const goToProduct = (product) => {
    //     navigate(`/product`, {
    //         state : {
    //             id: id,
    //             title: title,
    //             description: description,
    //             rating:rating,
    //             discountPercentage:discountPercentage,
    //             price:price,
    //             images: images,
    //             stock:stock
    //         }
    //     })
    // }
// console.log("product",product)

const add_to_cart = (state) => {
    let newState = {...state, qty:1}
    console.log("add_to_cart", state)
    dispatch(addToCart(newState))
} 
     return (product!== undefined ?  (
        <div className='cards p-2 my-3'>
            <div className='card_cont'>
                <div className='card_img'>
                    <img src={product.thumbnail} alt='card_img' className='card_img_cont img-fluid'></img>
                </div>
                <div className='card_title'>
                    <p className='card_title_cont'>{product.title}</p>
                </div>
                <div className='card_info d-flex justify-content-between'>
                    <p>{product.price} rs.</p>
                    <p>ratings {product.rating}</p>                           
                </div> 
                <div className='card_btn'>
                    <button className='card_info_btn'>Get Info</button>    
                    
                </div>   
            </div>
        </div>  
    ) : "")
}

export default Cards