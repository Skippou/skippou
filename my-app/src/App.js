
import './App.css';
import React, { Component } from 'react';

import CV from 'react-cv';
import { CVData } from './cvdata';	


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <CV {...CVData} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        
      </header>
    </div>
    
    
    
    
  );
}

export default App;
