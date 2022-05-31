import React from 'react';
import logo from './logo.svg';
import MainHeader from "./components/navbar/navbar.component"
import Homepage from "../src/homepage.component";
import './App.css';

function App() {
  return (
    <div className="App">
    <MainHeader/>
      <header className="App-header">
        <h1></h1>
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
