import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";
import Cards from '../../home/Cards'; 
import { addToCart } from '../../../reduxComponents/action';

function GoToHeaderProduct() {
    let navigate = useNavigate();
    let dispatch = useDispatch()
    let location = useLocation()
    const  headerCategory  = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    const [smartPhonesData, setSmartPhonesData] = useState([])
    const data = useSelector((state) => state.allProducts.data[0])

    useEffect(() => {
        setSmartPhonesData([])
        data && data.products.forEach((product) => {
            console.log("product.category", product.category)
            if (product.category == headerCategory) {
                setSmartPhonesData((item) => {
                    return [...item, product]
                })
            }
        })
    }, [headerCategory])

    console.log("smartPhonesData", smartPhonesData)
console.log("headerCategory", headerCategory)
    const goToProduct = (product) => {
      console.log("product", product)
      navigate(`/product`, {
        state : {
          product: product
        }
      })
}

const add_to_cart = (state) => {
    let newState = { ...state, qty: 1 }
    // console.log("add_to_cart", state)
    dispatch(addToCart(newState))
}

return (
    <div className='container'>
        <div className='AP_cont my-5'>
            <h1>{headerCategory}</h1>
            <div className='cards_cont d-flex flex-row flex-wrap'>
                {smartPhonesData.map((product, i) => {
                    return (
                        <div key={i} className='ap_product'>
                            <div onClick={() => goToProduct(product)}>
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

export default GoToHeaderProduct