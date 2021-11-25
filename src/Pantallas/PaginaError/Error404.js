import React,{useState} from "react";
import './Error404.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from "react-bootstrap";
import NavBar from "../ComponentesVarios/NavBar";






const Error404 = () => {

    return(
        
   <body>
       <div className="container">
        <h2>404</h2>
        <h3>Creo que estas perdido, Aquí solo hay codigo nucleares, no creo que sea lo que buscas</h3>
        <p>Revisa la URL que ingresaste</p>
       </div>
   </body>
   
    
    
    );
};

export default Error404;