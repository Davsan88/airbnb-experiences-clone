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
            <p>
                (6)·USA <br />
                Life lessons with Katie Zaferes <br />
                <bold>From $136</bold> / person                
            </p> 
        </div>
    </div>
  )
}

export default Card
