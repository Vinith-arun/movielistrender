
import './App.css';
import Home from './home'
import React from 'react';
import Movies from './Movies'
import { Movie } from './Movies';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';  
function App() {
  return (
    <Router className="App" id="that">
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/movies/:genre" exact element={<Movies/>}/>
        {/* <Route  path="/movies/search/" exact element={<Search/>}/> */}
        <Route  path="/movies/movie/:movie" element={<Movie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
