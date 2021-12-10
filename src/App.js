import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import PrivateRoute from './Pantallas/ComponentesVarios/ProtectedRoutes/PrivateRoute';
import PublicRoute from './Pantallas/ComponentesVarios/ProtectedRoutes/PublicRoute';
import Home from './Pantallas/Home/Home';
import Login from './Pantallas/Login/Login';
import UserRegistry from './Pantallas/UserRegistry/UserRegistry';
import Busqueda from './Pantallas/Busqueda/Busqueda';
import PerfilUsuario from './Pantallas/PerfilUsuario/PerfilUsuario';
import VerpublicacionEspecifica from './Pantallas/VerPublicacionEspecifica/VerPublicacionSeleccionada';
import CrearPublicacion from './Pantallas/CrearPublicacion/CrearPublicacion';
import EditUserData from './Pantallas/EditUserData/EditUserData';
import Error404 from './Pantallas/PaginaError/Error404';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route exact path="/" element={ <Home/> }></Route>
     <Route exact path="Home" element={ <Home/> }></Route>
     <Route exact path="/Login" element={ <PublicRoute /> }>
       <Route exact path="/Login" element={ <Login/> } />
     </Route>
     <Route exact path="/Register" element={ <PublicRoute /> }>
       <Route exact path="/Register" element={ <UserRegistry/> }></Route>
     </Route>
     <Route exact path="Busqueda/:search_query" element={ <Busqueda/> }></Route>
     <Route exact path="Perfil/:id_usuario" element={ <PerfilUsuario /> }></Route>
     <Route exact path="PublicacionSeleccionada/:idPublicacion" element ={ <VerpublicacionEspecifica/> }></Route> 
     <Route exact path="/Publicar" element={ <PrivateRoute /> }>
       <Route exact path="/Publicar" element={ <CrearPublicacion /> }/>
     </Route>
     <Route exact path="/Perfil/EditUserData" element={ <PrivateRoute /> }>
       <Route exact path="/Perfil/EditUserData" element={ <EditUserData /> }/>
     </Route>
     <Route path="*" element={ <Error404/> }></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;