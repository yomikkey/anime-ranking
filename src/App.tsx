import React from 'react';
import { useState, useEffect } from 'react';
import Chart from './components/Chart';
import Grid from './components/Grid';
import { getAnimes } from './services/api';

function App() {
  return (
    <div className="App">
      <Grid />
      <Chart />
    </div>
  );
}

export default App;
