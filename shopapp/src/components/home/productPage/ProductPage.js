import React from 'react'
import ProductPageLeft from './ProductPageLeft'
import ProductPageRight from './ProductPageRight'
import { useLocation } from 'react-router-dom'

function ProductPage() {
  const { state } = useLocation()

  return (
    <div className='productPage d-flex container'>
        <div className='left'><ProductPageLeft state={state} /></div>
        <div className='right'><ProductPageRight state={state} /></div>
    </div>
  )
}

export default ProductPage
