import React from 'react';
import './App.css';
import DropZone from './components/dropzone/dropzone.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          Drop Your Roms
        </a>
        <DropZone />
      </header>
    </div>
  );
}

export default App;
