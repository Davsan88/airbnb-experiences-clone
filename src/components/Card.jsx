import React from 'react'
import '../App.css'

const Card = () => {
  return (
    <div className='card'>
        <img className='card__image' src="katie-zaferes.png" alt="American professional triathlete Katie Zaferes" />
        <span className='card__status'>SOLD OUT</span>
      <div className='card__info'>
        <img src="star.png" alt="Star icon" className='card__star'/>
        <span>5.0 </span>
        <span>(6)·</span>
        <span>USA </span>
      </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><b>From $136</b> / person</p>
    </div>  
  )
}

export default Card
