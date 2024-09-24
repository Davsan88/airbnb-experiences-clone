import React from 'react'
import '../App.css'

const Card = () => {
  return (
    <div className='card'>
      <div className='card__image'>
        <img src="katie-zaferes.png" alt="American professional triathlete Katie Zaferes" />
        <p>SOLD OUT</p>
      </div>
      <div className='card__info'>
        <i class="fa-solid fa-star"></i>
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
