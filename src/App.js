
import './App.css';
// import Mlf from './ml';
import Home from './home'
import Movies from './Movies';
// import Vm from './vm';
import React from 'react';
import {Route} from "react-router-dom";
import { Routes} from 'react-router-dom';  
function App() {

  return (
    <Routes className="App" id="that">
      <Route  path="/" element={Home()}/>
      <Route  path="/movies/latest" element={Movies({"listTitle":"Letest Movies Collection","listRoute":"latest"})}/>
      <Route  path="/movies/action" element={Movies({"listTitle":"Action","listRoute":"action"})}/>
      <Route  path="/movies/crime" element={Movies({"listTitle":"Crime Movie Collection","listRoute":"crime"})}/>
      <Route  path="/movies/thriller" element={Movies({"listTitle":"Thriller Movies Collection","listRoute":"thriller"})}/>
      <Route  path="/movies/comedy" element={Movies({"listTitle":"Comedy Movies Collection","listRoute":"comedy"})}/>
      <Route  path="/movies/romantic" element={Movies({"listTitle":"Romantic Collection","listRoute":"romantic"})}/>
      <Route  path="/movies/kids" element={Movies({"listTitle":"Kids Collection","listRoute":"kids"})}/>
      {/* <Route path="/vijaymovie" element={Mlf({name:"vijaymovie",listname:"Vijay Movie"})}/>
      <Route exact path="/ajithmovie" element={Mlf({name:"ajithmovie",listname:"Ajith Movie"})}/> */}
    </Routes>
  );
}

export default App;
