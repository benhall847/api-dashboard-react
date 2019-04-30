import React from 'react';
import './App.css';
import FortuneApi from './FortuneApi';
import WeatherApi from './WeatherApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FortuneApi></FortuneApi>
        <WeatherApi></WeatherApi>
      </header>
    </div>
  );
}

export default App;
