//TODO: Check out MUI Slider
//TODO: Check out react-scroll 

import * as React from 'react'

import '../styles/App.css'
import Header from './Header'
import Hero from './Hero'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

export default function App () {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Education/>
      <Experience/>
      <Contact/>
    </div>
  )
}
