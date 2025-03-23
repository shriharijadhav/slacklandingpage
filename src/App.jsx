import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Homepage';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Homepage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
