import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './App.css'


function App() {
  const cardElements = data.map(({ id, title, price, coverImg, stats, location }) => (
    <Card key={id} title={title} price={price} coverImg={coverImg} stats={stats} location={location}/>
  ))

  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img="/katie-zaferes.png"
        status="SOLD OUT"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zafere"
        price={136}
      />
    </>
  )
}

export default App
