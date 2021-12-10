import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import { Container } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import CardPublicacion from "../ComponentesVarios/CardParaPublicacion/CardPublicacion";

const Home = () => { 

  const [publicacionesEstado , setPublicaciones] = useState([]);

  const LlenarArreglos = async () => {
    let publicaciones = [];

    await Api.get(Endpoints.publicaciones)
      .then((res) => {
        publicaciones = res.data;
      })
      .catch((e) =>
        alert("ocurrio algun error al recuperar las publicaciones")
      );

    await publicaciones.forEach((publicacion) => {
      Api.get(
        Endpoints.multimedia +
          "/" +
          publicacion.clave_publicacion +
          Endpoints.obtenerMultimediaEspecifica
      )
        .then((res) => {
          publicacion.multimedia = res.data.multimedia;

          setPublicaciones(publicacionesEstado=>[...publicacionesEstado, publicacion]);
          
        })
        .catch((e) => alert("Ocurrio un error al cargar las imagenes"));
    });

  };

  useEffect(() => {
    LlenarArreglos();
  }, []);

  return (    
    <div className="PrincipalDiv">
      <NavBar />
      <Container className="containerPublicaciones">

      
      
        {publicacionesEstado.map(publicacion =>(
            <div>
              <CardPublicacion key={publicacion.clave_publicacion} publication = {publicacion}/>
            </div>
        ))  }
      </Container>
      
    </div>
  );
};

export default Home;