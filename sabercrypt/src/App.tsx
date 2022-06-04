import React from 'react';
import logo from './logo.svg';
import MainHeader from "./components/navbar/navbar.component"
import Market from "../src/pages/market/market.component";
import './App.css';

function App() {
  return (
    <div className="App">
    <MainHeader/>
      <header className="App-header">
        <Market/>
      </header>
    </div>
  );
}

export default App;
