
import './App.css';
// import Mlf from './ml';
import Home from './home'
// import Vm from './vm';
import React from 'react';
import {Route} from "react-router-dom";
import { Routes} from 'react-router-dom';  
function App() {

  return (
    <Routes className="App" id="that">
      <Route  path="/" element={Home()}/>
      {/* <Route path="/vijaymovie" element={Mlf({name:"vijaymovie",listname:"Vijay Movie"})}/>
      <Route exact path="/ajithmovie" element={Mlf({name:"ajithmovie",listname:"Ajith Movie"})}/> */}
    </Routes>
  );
}

export default App;
