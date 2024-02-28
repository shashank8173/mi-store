import React from 'react'
import '../styles/StarProduct.css'

const StarProduct = ({StarProduct}) => {
  return (
    <div className='starProduct'>
      <div>
        <a href={StarProduct[0].url}><img src={StarProduct[0].image} alt="1ts pic"/></a>
      </div>
      <div>
        <a href={StarProduct[1].url}><img src={StarProduct[1].image} alt="2ts pic"/></a>
        <a href={StarProduct[2].url}><img src={StarProduct[2].image} alt="3ts pic"/></a>
        <a href={StarProduct[3].url}><img src={StarProduct[3].image} alt="4ts pic"/></a>
      </div>
    </div>
  )
}

export default StarProduct