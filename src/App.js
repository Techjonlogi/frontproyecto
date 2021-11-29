import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

import Login from './Pantallas/Login/Login'
import Home from './Pantallas/Home/Home';
import Error404 from './Pantallas/PaginaError/Error404';
import UserRegistry from './Pantallas/UserRegistry/UserRegistry';


function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route exact path="Login" element={<Login/>}></Route>
     <Route exact path="Register" element={<UserRegistry/>}></Route>
     <Route exact path="Home" element={<Home/>}></Route>
     <Route exact path="/" element={<Home/>}></Route>
    
     <Route path="*" element={<Error404/>}></Route>
     
     
   </Routes>
   </BrowserRouter>
     
   
  );
}

export default App;
