import React, { useState } from "react";
import Nav from './Nav';

import { Home, About, Fav } from "./pages"
import { Routes, Route } from "react-router-dom"


const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/favorites" element={<Fav />}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;