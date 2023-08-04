import React, { useState, useEffect } from 'react';
import '../../../static/components/home/productPage/productPageLeft.css'

function ProductPageLeft(props) {
    const { state } = props
    const [index, setIndex] = useState(0)
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(state.product.images)
    },[])

    const changeIndex = (ind) => {
        setIndex(ind)
    }

    return (
        <div className='productPageLeft'>
            <div className='ppl d-flex'>
                <div className='alt_images_cont'>
                    <ul>
                    {images && images.map((image, i) => {
                        return (
                            <li className='alt_img' key={i}>
                                <img src={image}  alt='alt_img' className='alt_image' onMouseEnter={() => changeIndex(i)}/>
                            </li>
                        )
                    })}
                    </ul>
                    
                </div>
                <div className='main_image_cont'>
                    <div className='main_img'>
                        <img src={images[index]} alt="main_img" className='main_image img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageLeft