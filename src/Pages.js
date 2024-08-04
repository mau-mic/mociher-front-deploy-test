// Pages.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Obras from './Obras';

function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/obras-ejecutadas" element={<Obras tab="ejecutadas" />} />
        <Route path="/obras-en-ejecucion" element={<Obras tab="ejecucion" />} />
      </Routes>
    </Router>
  );
}

export default Pages;