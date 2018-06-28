import React from 'react'
import './Box.css'

const Boxes = [{title: 'Photography', background: '../assets/coin-watch-screen.png'}, {title: 'Blog'} ]

// const boxesToDisplay = Boxes.map( subject => {
//   <Box 
//     title={subject.title}
//     background={subject.background}
//   />
// })


// export const Box = (title) => {
//   return (
//     <div className='box-one'>
//       <h3>{title}</h3>
//     </div>
//   )
// }

export const BoxOne = () => {
  return (
    <div className='box-one'>
      <h3>BoxOne</h3>
    </div>
  )
}

export const BoxTwo = () => {
return (
  <div className='box-one box-two'>
    <h3>Photography</h3>
  </div>
  )
}

export const BoxThree = () => {
return (
  <div className='box-one'>
    <h3>Blog</h3>
  </div>
  )
}

export const BoxFour = () => {
return (
  <div className='box-one'>
    <h3>BoxFour</h3>
  </div>
  )
}