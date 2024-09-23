import React from 'react'
import '../App.css'

const Hero = () => {
  return (
    <div className='hero'>
      <img  className="hero__img" src="airbnb-experiences-grid.jpg" alt="Grid of different images" />
      <div className="hero__div" >
        <h1 className="hero__div__h1" >Online Experiencies</h1>
        <p className="hero__div__p" >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero
