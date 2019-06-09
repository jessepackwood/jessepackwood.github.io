import React, { Component } from 'react'
import BeforeAfterSlider from 'react-before-after-slider'
import ReactCompareImage from 'react-compare-image'
import villain_before from '../../assets/photos/villian_before.jpg'
import villain_after from '../../assets/photos/villian_after.jpg'
import grizzly_before from '../../assets/photos/grizzly_before.jpg'
import grizzly_after from '../../assets/photos/grizzly_after.jpg'
import wildtogether_before from '../../assets/photos/wildtogether_before.jpg'
import wildtogether_after from '../../assets/photos/wildtogether_after.jpg'
import hero_canoe_before from '../../assets/photos/hero_before_canoe.jpg'
import hero_canoe_after from '../../assets/photos/hero_after_canoe.jpg'
import './Presets.css'

class Presets extends Component {
  render () {

    return (
      <div className= 'preset-container'>
        <div className='preset-about'>
          Me and Kelly Lund aka @sharktoof on Instagram have teamed up to offer the presets we developed for our instagram feeds as well as the photos featured on Loki's instagram. 
          <span className='slider-instruction'>Move the slider from right to left to see how our presets look before and after they are applied.</span>
          <span className='slider-instruction'>They're available for purchase at <a href='https://lokithewolfdog.com/shop/presets-wolvesinthewind/' className='preset-shop-link'>lokithewolfdog.com</a></span>
        </div>
        <div className='slider-container'>
          <h2>Hero</h2>
          <ReactCompareImage
            leftImage={hero_canoe_before}
            leftImageLabel="Before"
            rightImage={hero_canoe_after}
            rightImageLabel="After"
          />
        </div>
        <div className='slider-container'>
          <h2>Villain</h2>
          <ReactCompareImage
            leftImage={villain_before}
            leftImageLabel="Before"
            rightImage={villain_after}
            rightImageLabel="After"
          />
        </div>
        <div className='slider-container'>
          <h2>Grizzly</h2>
          <ReactCompareImage
            leftImage={grizzly_before}
            leftImageLabel="Before"
            rightImage={grizzly_after}
            rightImageLabel="After"
          />
        </div>
        <div className='slider-container'>
          <h2>Wild Together</h2>
          <ReactCompareImage
            leftImage={wildtogether_before}
            leftImageLabel="Before"
            rightImage={wildtogether_after}
            rightImageLabel="After"
          />
        </div>
      </div>
    )
  }
}

export default Presets;