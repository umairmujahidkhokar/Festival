import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Events/>
      <ContactUs/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
