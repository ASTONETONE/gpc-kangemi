import React from 'react'
import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Footer from './components/footer.jsx'

const App = () => {


  return (
    <main>
      <header>
        <Navbar />
      </header>

      <Hero />
      
      <About />

      <Footer />

    </main>
  )
}

export default App