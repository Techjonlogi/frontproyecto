import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

import { Container } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import EditarPublicacion from "../EditarPublicacion/EditarPublicacion";
import verComentariosAdmin from "../verComentarioAdmin/verListacomentarios";

const Home = () => {
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