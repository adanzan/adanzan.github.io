// import logo from './logo.svg';
import * as React from "react";

import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";

function App (workData) {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Journey/>
      {/* {snippets} */}
      <Contact/>
    </div>
  );
}

export default App;
