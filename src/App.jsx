import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'  // 1. Importing the data file
import './App.css'


function App() {
  // 2. Using .map() to loop over the data array and create a Card component for each item
  const cardElements = data.map(( item ) => (
    <Card 
      key={item.id}
      item={item}
    />
  ))

  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards-list">
        { cardElements }
      </div>
    </>
  )
}

export default App
