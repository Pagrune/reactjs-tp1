import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';

import PageEssai from './views/PageEssai.js';
import Home from './views/Home.js';
import Navigation from './components/Navigation.js';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/PageEssai" element={<PageEssai />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Navigation/>
    </div>
    
  );
}
