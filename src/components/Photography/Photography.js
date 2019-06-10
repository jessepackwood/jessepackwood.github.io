import React from 'react'
import { render } from 'react-dom';
import GridGallery from '../Gallery/Gallery'
import './Photography.css'

const Photography = () => {
  return (
    <div>
    <GridGallery />
    {/* <div className='mobile-gallery'>
      <img src={ kayla_buff } className='photo' />
      <img src={ colombia_fly } className='photo' />
      <img src={ peacock_abel } className='photo' />
      <img src={ janelle_royal } className='photo' />
      <img src={ gfc_tacoma } className='photo' />
    </div> */}
    </div>
  )
}

export default Photography