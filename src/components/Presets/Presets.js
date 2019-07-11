import React, { Component } from 'react'
import ReactCompareImage from 'react-compare-image'
import Header from '../Header/Header'
import villain_before from '../../assets/presets/villian_before.jpg'
import villain_after from '../../assets/presets/villian_after.jpg'
import grizzly_before from '../../assets/presets/grizzly_before.jpg'
import grizzly_after from '../../assets/presets/grizzly_after.jpg'
import wildtogether_before from '../../assets/presets/wildtogether_before.jpg'
import wildtogether_after from '../../assets/presets/wildtogether_after.jpg'
import hero_canoe_before from '../../assets/presets/hero_before_canoe.jpg'
import hero_canoe_after from '../../assets/presets/hero_after_canoe.jpg'
import './Presets.css'

class Presets extends Component {
  render () {

    return (
      <div>
        <Header />
      <div className= 'preset-container'>
        <div className='preset-about'>
          <div>
            <h2 className='preset-title'>Lightroom Presets</h2>
            Me and Kelly Lund aka @sharktoof on Instagram have teamed up to offer the presets we developed for our instagram feeds as well as the photos featured on Loki's instagram account. 
            <span className='slider-instruction'>Move the slider from right to left to see how our presets look before and after they are applied.</span>
          </div>
          <div className='preset-button-container'>
            <a href='https://lokithewolfdog.com/shop/presets-wolvesinthewind/' className='shop-preset-link'><button className='preset-button'>Shop Presets</button></a>
          </div>
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
      </div>
    )
  }
}

export default Presets;