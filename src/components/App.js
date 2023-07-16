import * as React from 'react'

import '../styles/App.css'
import Header from './Header'
import Hero from './Hero'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'

//TODO: Check out MUI Slider

export default function App () {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Education/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  )
}
