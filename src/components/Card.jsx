import React from 'react'
import '../App.css'

const Card = ({ img, status, rating, reviewCount, country, title, price }) => {
  console.log({ img, status, rating, reviewCount, country, title, price }); // Check props


  return (

    <div className='card'>
      <img className='card__image' src={img} alt="American professional triathlete Katie Zaferes" />
      <span className='card__status'>{status}</span>
      <div className='card__info'>
        <img src="star.png" alt="Star icon" className='card__star' />
        <span>{rating} </span>
        <span className='gray'>({reviewCount}) ·</span>
        <span className='gray'>{country} </span>
      </div>
      <h2>{title}</h2>
      <p><b>From ${price}</b> / person</p>
    </div>
  )
}

export default Card
