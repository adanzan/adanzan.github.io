// import logo from './logo.svg';
import * as React from 'react'

import './App.css';
import Snippet from './components/Snippet';
import Header from './components/Header';

// TODO: Footer
// TODO: Add Logo, take inspiration from other personal websites
// TODO: Complete Snippet with json file
  // TODO: CSS

function App(workData) {
  // List of all journey snippets
  let snippets = [];
  
  // Creates a Snippet component for all workData entries
  for (let index in workData) {
    let work = workData[index];
    // TODO: Add for new fields
    snippets.push(<Snippet key={index} orgName={work.orgName} location={work.location} positions={work.positions}/>);
  }

  return (
    <div className="App">
      <Header/>
      <h1>Hello, I am Anthony</h1>

      {snippets}
    </div>
  );
}

export default App;
