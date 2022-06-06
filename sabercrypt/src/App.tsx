import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from '.././src/components/navbar/navbar.component'
import Home from '../src/pages/home/homepage.component'
import Market from '../src/pages/market/market.component'

export default function App(){
  return(
      <>
        <Navbar/>
          <div className="contain">
            <Routes>
              <Route path="/" element={<Home/> }/>
              <Route path="/" element={<Market/> }/>
            </Routes>

          </div>
        </>
  )
}
