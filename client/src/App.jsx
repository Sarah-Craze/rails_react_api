import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
function App() {
  return(
    <Router>
      <div className="App">
        <AppRoutes />
      </div>

      </Router>

    );
}

export default App
