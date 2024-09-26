import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'


function App() {
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
