import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

import Login from './Pantallas/Login/Login'
import Home from './Pantallas/Home/Home';
import Error404 from './Pantallas/PaginaError/Error404';
import CrearPublicacion from './Pantallas/CrearPublicacion/CrearPublicacion';
import PerfilUsuario from './Pantallas/PerfilUsuario/PerfilUsuario';
import UserRegistry from './Pantallas/UserRegistry/UserRegistry';
import Busqueda from './Pantallas/Busqueda/Busqueda';
import VerpublicacionEspecifica from './Pantallas/VerPublicacionEspecifica/VerPublicacionSeleccionada';



function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route exact path="Login" element={ <Login/> }></Route>
     <Route exact path="Register" element={ <UserRegistry/> }></Route>
     <Route exact path="Home" element={ <Home/> }></Route>
     <Route exact path="Publicar" element={ <CrearPublicacion /> }></Route>
     <Route exact path="Perfil/:id_usuario" element={ <PerfilUsuario /> }></Route>
     <Route exact path="/" element={ <Home/> }></Route>
     <Route exact path="Busqueda/:search_query" element={ <Busqueda/> }></Route>
     <Route exact path ="PublicacionSeleccionada/:idPublicacion" element ={<VerpublicacionEspecifica/>}></Route> 
     <Route path="*" element={ <Error404/> }></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
