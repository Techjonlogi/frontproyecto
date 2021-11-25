import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';





import Login from './Pantallas/Login/Login'
import Home from './Pantallas/Home/Home';


function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="Login" element={<Login/>}></Route>
     <Route path="Home" element={<Home/>}></Route>
     
   </Routes>
   </BrowserRouter>
     
   
  );
}

export default App;
