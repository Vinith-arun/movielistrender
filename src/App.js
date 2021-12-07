
import './App.css';
import Home from './home'
import React from 'react';
import Movies from './Movies'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';  
function App() {
  return (
    <Router className="App" id="that">
      <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/movies/:genre" element={<Movies/>}/>
    </Routes>
    </Router>
  );
}

export default App;
