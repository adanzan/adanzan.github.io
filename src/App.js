// import logo from './logo.svg';
import './App.css';

import Snippet from './components/Snippet';

// TODO: Header
// TODO: Footer
// TODO: Add Logo, take inspiration from other personal websites
// TODO: Complete Snippet with json file
  // TODO: CSS
  // TODO: Finish JSON file

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
      <h1>Hello, I am Anthony</h1>
      {snippets}
    </div>
  );
}

export default App;
