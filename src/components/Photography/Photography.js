import React from 'react'
import kayla_buff from '../../assets/photos/kayla_buff.jpg'
import colombia_fly from '../../assets/photos/colombia_fly.jpg'
import Presets from '../Presets/Presets'
import './Photography.css'

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className='temp-heading'>More photos coming soon</h1>
      <img src={ kayla_buff } className='photo' />
      <img src={ colombia_fly } className='photo' />
      <Presets />
    </div>
  )
}

export default Gallery