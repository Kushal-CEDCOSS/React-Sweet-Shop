import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Products from './Products';
import { Main } from './Contexts/Main';

function App() {
  return (
    <div className="App">
      <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      </Main>
    </div>
  );
}

export default App;
