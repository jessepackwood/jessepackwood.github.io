import React from 'react'
import photo from '../../assets/photos/kayla_buff.jpg'
import './Photography.css'

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Photos coming soon</h1>
      <img src={ photo } className='umpqua-photo' />
    </div>
  )
}

export default Gallery