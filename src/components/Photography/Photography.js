import React from 'react'
import photo from '../../assets/photos/_DSC0193.jpg'
import './Photography.css'

const Gallery = () => {
  return (
    <div className="gallery">
      <img src={ photo } className='umpqua-photo' />
    </div>
  )
}

export default Gallery