import React from 'react'
import '../App.css'

// 3. Card receives the props and can either use them directly or destructure them for easier access.
const Card = ({ item }) => {
  const { title, price, coverImg, stats: {rating, reviewCount}, location, openSpots } = item

  let statusText
  if (openSpots === 0) {
    statusText = 'SOLD OUT'
  } else if (location === 'Online') {
    statusText = 'ONLINE'
  }

  return (

    <div className='card'>
      <img className='card__image' src={coverImg} alt="Cover image" />
      {statusText && <div className='card__status'>{statusText}</div>}
      <div className='card__info'>
        <img src="star.png" alt="Star icon" className='card__star' />
        <span>{rating} </span>
        <span className='gray'>({reviewCount}) ·</span>
        <span className='gray'>{location} </span>
      </div>
      <h2>{title}</h2>
      <p><b>From ${price}</b> / person</p>
    </div>
  )
}

export default Card
