
import './App.css';
import Home from './home'
import React from 'react';
import Movies from './Movies'
import { Search } from './Movies';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';  
function App() {
  return (
    <Router className="App" id="that">
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/movies/:genre" element={<Movies/>}/>
        <Route  path="/movies/search/:name" element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
