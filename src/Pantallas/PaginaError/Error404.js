import React from "react";
import './Error404.css';
import 'bootstrap/dist/css/bootstrap.css';







const Error404 = () => {

    return(
        
   <body className="body404" fluid>
       <div className="container">
        <h2>404</h2>
        <h3>Creo que estas perdido, Aquí solo hay codigo nucleares, no creo que sea lo que buscas</h3>
        <p>Revisa la URL que ingresaste</p>
        <a className="btn-primary" href="/Home"><small className="reset">Regresar a un lugar seguro</small></a>
       </div>
   </body>
   
    
    
    );
};

export default Error404;