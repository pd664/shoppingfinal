import React, {useState, useEffect} from 'react';
import '../../static/components/home/carousel.css';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
const images = ['https://img.freepik.com/premium-photo/hovering-horizontal-3d-smartphone_465438-10.jpg', 
    'https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-romantic-perfume-art-small-fresh-glass-blue-banner-image_181284.jpg', 
    'https://img.freepik.com/free-photo/elevated-view-laptop-stationeries-blue-backdrop_23-2147880457.jpg'
]

const data = [{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]},
{"id":15,"title":"Eau De Perfume Spray","description":"Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality","price":30,"discountPercentage":10.99,"rating":4.7,"stock":105,"brand":"Lord - Al-Rehab","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/15/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/15/1.jpg","https://i.dummyjson.com/data/products/15/2.jpg","https://i.dummyjson.com/data/products/15/3.jpg","https://i.dummyjson.com/data/products/15/4.jpg","https://i.dummyjson.com/data/products/15/thumbnail.jpg"]},
{"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"Apple","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png","images":["https://i.dummyjson.com/data/products/6/1.png","https://i.dummyjson.com/data/products/6/2.jpg","https://i.dummyjson.com/data/products/6/3.png","https://i.dummyjson.com/data/products/6/4.jpg"]},
]
function Carousel() {
    const [index, setIndex] = useState(0)
    let navigate = useNavigate(); 
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("index", index)
            if(index < images.length-1) setIndex(index + 1);
            else setIndex(0)
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    const increment = () => {
        if(index < images.length-1) setIndex(index + 1);
        else setIndex(0)
    }
    const decrement = () => {
        if(index  >=0) setIndex(images.length-1);
        else setIndex(index--)
    }
    const goToProduct = (product) => {
        console.log("product", product)
        navigate(`/product`, {
          state : {
            product: product
          }
        })
      }

    return (
        <div className='car_images' >
            <div onClick={() => goToProduct(data[index])}>
            <img className='carousel_img' src={images[index]} alt="image"></img>
            </div>
            
            <button className='caousel_btn caousel_btn_right' onClick={increment}><MdArrowForwardIos /></button>
            <button className='caousel_btn caousel_btn_left' onClick={decrement}><MdArrowBackIosNew /></button>
        </div>
    )
}

export default Carousel