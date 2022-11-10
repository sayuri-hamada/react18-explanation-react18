import React from 'react';
import './App.css';
import { AutoBacthEventHandler } from './components/AutoBacthEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';

function App() {
  return (
    <div className="App">
      <AutoBacthEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
    </div>
  );
}

export default App;
