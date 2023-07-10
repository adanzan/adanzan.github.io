import * as React from 'react'

import '../styles/App.css'
import Header from './Header'
import Hero from './Hero'
import Journey from './Journey'
import Contact from './Contact'

function App () {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Journey/>
      <Contact/>
    </div>
  )
}

export default App
