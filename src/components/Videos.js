import React from 'react'
import VideoCard from './VideoCard'
import "../styles/Videos.css"
const Videos = ({videos}) => {
  return (
    <div className='Videos'>
      {
  videos.map((item, index)=>(
    <VideoCard index={index} image={item.image} name={item.name} key={item.image}/>
  ))

      }
    </div>
  )
}

export default Videos
