import React from 'react'
import Carousel from './Carousel'
import Trending from './Trending'
import Allproducts from './Allproducts'

function Index() {
  return (
    <div >
        <Carousel />
        <div className='container'>
          <Trending />
        <Allproducts />
        </div>
        
    </div>
  )
}

export default Index