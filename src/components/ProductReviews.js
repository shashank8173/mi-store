import React from 'react'
import ProductReviewsCard from './ProductReviewsCard'
import '../styles/ProductReviews.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {
        productReviews.map((item, index)=>(
            <ProductReviewsCard key={item.image} name={item.name} image={item.image} price={item.price} review={item.review} index={index}/>

        ))
        
        }
      
    </div>
  )
}

export default ProductReviews
