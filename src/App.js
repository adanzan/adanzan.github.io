// import logo from './logo.svg';
import * as React from 'react'

import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Snippet from './components/Snippet';

// TODO: Add Logo, take inspiration from other personal websites
// TODO: Complete Snippet with json file
  // TODO: CSS

function App(workData) {
  // List of all journey snippets
  let snippets = [];
  
  // Creates a Snippet component for all workData entries
  // TODO: Evaluate whether to use json.parse() method
  for (let index in workData) {
    let work = workData[index];
    // TODO: Add for new fields
    snippets.push(<Snippet key={index} orgName={work.orgName} location={work.location} positions={work.positions}/>);
  }

  return (
    <div className="App">
      <Header/>
      <Hero/>

      {snippets}
      <Contact/>
    </div>
  );
}

export default App;
