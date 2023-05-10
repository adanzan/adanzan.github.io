// import logo from './logo.svg';
import './App.css';

import Snippet from './components/Snippet';

// TODO: Header
// TODO: Footer
// TODO: Change Logo, take inspiration from other personal websites
// TODO: Complete Snippet with json file
  // TODO: CSS
  // TODO: Finish JSON file

function App(workData) {
  // List of all journey snippets
  let snippets = [];
  
  // Create a Snippet component for all work
    // TODO: See if I can optimize by using map, foreach etc
  for (let index in workData) {
    let work = workData[index];
    snippets.push(<Snippet key={index} orgName={work.orgName} location={work.location} positions={work.positions}/>);
  }

  return (
    <div className="App">
      <h1>Hello, I am Anthony</h1>
      {snippets}
    </div>
  );
}

export default App;
