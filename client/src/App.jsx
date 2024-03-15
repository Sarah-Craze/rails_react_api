import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
function App() {
  return(
    <Router>
      <div className="App">
        <h1>Welcome to our Marketplace</h1>
        <p>client/src/App.jsx</p>
        <Navbar />
        <AppRoutes />
      </div>

      </Router>

    );
}

export default App
