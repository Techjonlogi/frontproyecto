import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import CardPublicacion from "../ComponentesVarios/CardParaPublicacion/CardPublicacion";

const Home = () => { 
  const [ publicaciones, setPublicaciones ] = useState( [] );

  const LlenarArreglos = async () => {

    await Api.get( Endpoints.publicaciones )
      .then( ( res ) => {
        setPublicaciones( res.data );
      } ).catch( ( e ) =>
        alert( "ocurrio algun error al recuperar las publicaciones" )
      );
  };

  useEffect( () => {
    LlenarArreglos();
  }, [] );

  return (    
    <div className="PrincipalDiv">
      <NavBar />
      <Container className="containerPublicaciones">
        { publicaciones.map( ( publicacion ) => (
            <div>
              <CardPublicacion key={ publicacion.clave_publicacion } clave_publicacion={ publicacion.clave_publicacion } multimedia={ publicacion.multimedia }/>
            </div>
        ) ) }
      </Container>
    </div>
  );
};

export default Home;