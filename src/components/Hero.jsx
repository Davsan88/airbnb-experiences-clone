import React from 'react'
import '../App.css'

const Hero = () => {
  return (
    <div className='hero'>
      <img  className="hero__img" src="airbnb-experiences-grid.jpg" alt="Grid of different images" />
      <div className="hero__content" >
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero