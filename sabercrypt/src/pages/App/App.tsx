import React from 'react';
import Home from '../home/homepage.component'
import Market from '../market/market.component'
import {Route, Routes} from "react-router-dom";
import NavBar from '../../components/navbar/navbar.component'

import './App.css'

export default function App(){
  return(
      <>
        <NavBar/>
          <div className="App-Style">
            <Routes>
              <Route path="/" element={<Home/>   }/>
              <Route path="/market" element={<Market/> }/>
            </Routes>
          </div>
        </>
  )
}
