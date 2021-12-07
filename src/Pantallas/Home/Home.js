import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import { Container } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";


const Home = () => { 
let publicaciones =[]
let publicacionesConMultimedia =[]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async()=>{
    await Api.get(Endpoints.publicaciones).then( (res) =>{
      publicaciones = res.data;
    }).catch(( e ) =>
    alert("ocurrio algun error al recuperar las publicaciones")
    );

    await publicaciones.forEach(publicacion =>(
      Api.get(Endpoints.multimedia +"/"+ publicacion.clave_publicacion +Endpoints.obtenerMultimediaEspecifica).then((res)=>{
        publicacion.multimedia = res.data.multimedia;
        publicacionesConMultimedia.push(publicacion);
        console.log(publicacionesConMultimedia);
        
      }).catch((e) =>
      alert("Ocurrio un error al cargar las imagenes")
      )
    ))


  }
  );
    

  return (
      
  
    <>
      <NavBar />
      
      <verComentarioAdmin/>
      <Container className="HomeContent" >
      </Container>
      
    </>
  );
};

export default Home;