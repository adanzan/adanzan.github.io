import * as React from "react";

import "./styles/App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";

function App () {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Journey/>
      <Contact/>
    </div>
  );
}

export default App;
