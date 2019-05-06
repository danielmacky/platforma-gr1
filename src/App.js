import React, {useState} from 'react';
import './App.css';
import {clearTranslated} from './modules/axes';
import GR1 from './components/gr1/gr1.js';
import GR2 from './components/gr2/gr2.js';
import TEST from './components/test/test.js';

function App() {

  let [page, setPage] = useState('gr1');

  function updatePage(page) {
    clearTranslated();
    setPage(page);
  }

  return (
    <div className="App">
      <a href="javascript: void" onClick={() => updatePage('gr1')}>Ecuatia de gradul 1</a>
      <br /><br /><br />
      <a href="javascript: void" onClick={() => updatePage('gr2')}>gr2</a>
      <br />
      <a href="javascript: void" onClick={() => updatePage('test')}>test</a>
      {page === 'gr1' && (
        <GR1 />
      )}
      {page === 'gr2' && (
        <GR2 />
      )}
      {page === 'test' && (
        <TEST />
      )}
    </div>
  );
}

export default App;
