import React, { Suspense } from 'react';
import './App.css';
import { AutoBacthEventHandler } from './components/AutoBacthEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { ReactQuery } from './components/ReactQuery';
import { Transition } from './components/Transition';

function App() {
  return (
    <div className="App">
      <AutoBacthEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <Suspense fallback={<p>ローディング中です</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
