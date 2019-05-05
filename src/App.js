import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GR1 from './components/gr1/gr1.js';
import GR2 from './components/gr2/gr2.js';

function App() {

  let [page, setPage] = useState('gr1');
  let [x, setX] = useState(10);

  return (
    <div className="App">
      {/* <input value={x} onChange={e => setX(e.target.value)} /> */}
      <a onClick={() => setPage('gr1')}>Ecuatia de gradul 1</a>
      <br /><br /><br />
      <a onClick={() => setPage('gr2')}>gr2</a>
      {/* <select value={page} onChange={e => setPage(e.target.value)}>
        <option value="gr1">gr1</option>
        <option value="gr2">gr2</option>
      </select> */}
      {page === 'gr1' && (
        <GR1 x={x} y="56"></GR1>
      )}
      {page === 'gr2' && (
        <GR2></GR2>
      )}
    </div>
  );
}

export default App;
