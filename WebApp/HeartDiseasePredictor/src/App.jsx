import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParallaxProvider>
        <div className='w-screen overflow-x-hidden bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-600'>
          <Navbar />
          <Hero />
        </div>
      </ParallaxProvider >
    </>
  )
}

export default App
