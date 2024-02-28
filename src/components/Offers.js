import React from 'react'
import Offer from './Offer'
import "../styles/Offers.css"

const Offers = ({offer}) => {
  return (
    <div className='offerSection'>

        {
            offer.map((item, index)=>(

                <Offer key={item.image} index={item.index} src={item.image} link={item.url} />
            ))
        }
       
    </div>
  )
}

export default Offers
