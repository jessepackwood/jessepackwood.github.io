import React, { Component } from 'react'
import BeforeAfterSlider from 'react-before-after-slider'
import villain_before from '../../assets/photos/villian_before.jpg'
import villain_after from '../../assets/photos/villian_after.jpg'
import './Presets.css'

class Presets extends Component {
  render () {
    const before = villain_before;
    const after = villain_after;

    return (
      <div className= 'preset'>
        <BeforeAfterSlider
          before={before}
          after={after}
          width={640}
          height={480}
        />
      </div>
    )
  }
}

export default Presets;