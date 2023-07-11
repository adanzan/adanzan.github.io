import * as React from 'react'

import '../styles/App.css'
import Header from './Header'
import Hero from './Hero'
import Experience from './Experience'
import Contact from './Contact'

function App () {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
